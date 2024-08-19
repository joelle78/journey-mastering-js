<script setup>
import { onMounted, onUnmounted } from 'vue';

function handleUpdate(event) {
  const input = event.target;
  const suffix = input.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
}

let controlsContainer = null;

onMounted(() => {
  controlsContainer = document.querySelector('.controls');
  if (controlsContainer) {
    controlsContainer.addEventListener('change', handleUpdate);
    controlsContainer.addEventListener('mousemove', handleUpdate);
  }
});

onUnmounted(() => {
  if (controlsContainer) {
    controlsContainer.removeEventListener('change', handleUpdate);
    controlsContainer.removeEventListener('mousemove', handleUpdate);
  }
});
</script>

<template>
  <div>
    <div class="controls">
      <label for="spacing">Spacing:</label>
      <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

      <label for="blur">Blur:</label>
      <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

      <label for="base">Base Color</label>
      <input id="base" type="color" name="base" value="#ffc600">
    </div>

    <img src="public/images/utrecht.jpg">
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

img {
  width: 19rem;
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
</style>
