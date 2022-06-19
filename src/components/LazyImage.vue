<script lang="ts">
export default {
  name: 'LazyImage',
};
</script>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
const props = defineProps<{
  baseUrl: string;
  imgSrc?: string;
  lqip?: string;
  alt?: string;
  // srcset?: string;
  // alt?: string;
  // variants?: Record<string, Record<string, string>>;
}>();
const target = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting;
  },
  {
    rootMargin: '300px 0px',
  }
);

const imgUrl = computed(() => `${props.baseUrl}/${props.imgSrc}`);
watch(targetIsVisible, (isVisible) => {
  console.log('isVisible', isVisible);
});
</script>

<template>
  <div ref="target" class="image-container">
    <img :src="imgUrl" :alt="props.alt" class="image" />
  </div>
</template>

<style lang="css">
.image-container {
  max-width: 1200px;
  margin: auto;
}

.image {
  max-width: 100%;
  margin: auto;
}
</style>
