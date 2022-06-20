<script lang="ts">
export default {
  name: 'LazyImage',
};
</script>

<script setup lang="ts">
import { computed, ref, watch, withDefaults } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import { ImageData, AllowedImageFormats } from 'src/types';
import { buildSrcSet } from '@utils/images';

const props = withDefaults(
  defineProps<{
    baseUrl?: string;
    imgSrc?: string;
    imgSrcset?: string;
    placeholder?: string;
    alt?: string;
    imageData?: ImageData;
    variantFormat?: AllowedImageFormats;
    rootMargin?: string;
  }>(),
  {
    baseUrl: import.meta.env.PUBLIC_BASE_IMAGE_URL,
    variantFormat: 'jpg',
    rootMargin: '1000px 0px',
  }
);
const target = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting;
  },
  {
    rootMargin: props.rootMargin,
  }
);

const computedSrcSet = computed(() => {
  if (!targetIsVisible.value) {
    return '';
  }
  return props.imageData
    ? buildSrcSet(props.imageData, props.variantFormat, props.baseUrl)
    : props.imgSrcset;
});
const computedSrc = computed(() => {
  // TODO - get a default gray box placeholder
  if (!targetIsVisible.value) {
    return props.imageData.lqip.base64 ?? props.placeholder;
  }

  return `${props?.baseUrl ?? ''}/${props?.imgSrc ?? ''}`;
});

watch(targetIsVisible, (isVisible) => {
  if (isVisible) {
    stop();
  }
});

console.log(computedSrcSet.value);
</script>

<template>
  <div ref="target" class="image-container">
    <img
      :src="computedSrc"
      :srcset="computedSrcSet"
      :alt="props.alt"
      class="image"
    />
  </div>
</template>

<style lang="css">
.image-container {
  max-width: 1200px;
  margin: auto;
}

.image {
  width: 100%;
  margin: auto;
}
</style>
