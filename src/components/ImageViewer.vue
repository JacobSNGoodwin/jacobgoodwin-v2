<script setup lang="ts">
import { ref } from 'vue';
import { useFullscreen } from '@vueuse/core';

const containerEl = ref<HTMLElement | null>(null);
const { isFullscreen, toggle } = useFullscreen(containerEl);
</script>

<template>
  <!-- Add a preview container visible if !fullScreen -->
  <div class="fs-container" ref="containerEl">
    <div class="fs-content" v-if="isFullscreen">
      <h3>Fullscreen content</h3>
    </div>
  </div>
  <button @click="toggle">Open Full screen</button>
</template>

<style scoped lang="css">
/* .fs-container {
  &:fullscreen {
    color: white;
  }
} */
.fs-content {
  max-width: 2400px;
  height: 100vh;
  background-color: white;
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
