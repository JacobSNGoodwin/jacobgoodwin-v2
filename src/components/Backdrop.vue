<script lang="ts">
export default {
  name: 'Backdrop',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import CilFullscreenExit from './icons/CilFullscreenExit.vue';

const containerEl = ref<HTMLElement | null>(null);

// TODO - define isOpened/isActive
const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <div class="fs-container" ref="containerEl" v-if="props.isOpen">
    <div role="button" class="fs-close" @click="emit('close')">
      <slot name="icon">
        <CilFullscreenExit />
      </slot>
    </div>
    <div class="fs-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="css">
.fs-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(25, 25, 25, 0.75);
  &:fullscreen {
    color: white;
  }
}
.fs-content {
  max-width: 2400px;
  height: 100vh;
  margin: auto;
}

.fs-close {
  height: 24px;
  width: 24px;
  color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 36px;
  right: 36px;
  cursor: pointer;
  padding: 12px;
  border-radius: 36px;
  &:hover {
    background-color: RGBA(150, 150, 150, 0.25);
  }
}
</style>
