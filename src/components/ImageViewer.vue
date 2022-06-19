<script lang="ts">
export default {
  name: 'ImageViewer',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { useFullscreen } from '@vueuse/core';
import CilFullscreenExit from '@icons/CilFullscreenExit.vue';

const containerEl = ref<HTMLElement | null>(null);
const { isFullscreen, toggle, exit } = useFullscreen(containerEl);
</script>

<template>
  <!-- Add a preview container visible if !fullScreen -->
  <div class="fs-container" ref="containerEl">
    <div role="button" class="fs-close" v-if="isFullscreen" @click="exit">
      <CilFullscreenExit />
    </div>
    <div class="fs-content" v-if="isFullscreen"></div>
  </div>
  <button @click="toggle">Open Full screen</button>
</template>

<style scoped lang="css">
.fs-container {
  &:fullscreen {
    color: white;
  }
}
.fs-content {
  max-width: 2400px;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fs-close {
  height: 24px;
  width: 24px;
  position: absolute;
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
