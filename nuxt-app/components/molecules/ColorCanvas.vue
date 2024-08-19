<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvas = ref(null);

let ctx = null;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing || !ctx) return;

  // Get the position based on event type
  const { offsetX, offsetY } = e.touches ? e.touches[0] : e;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();
  [lastX, lastY] = [offsetX, offsetY];

  hue++;
  if (hue >= 360) hue = 0;

  ctx.lineWidth += direction ? 1 : -1;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
}

function startDrawing(e) {
  if (ctx) {
    isDrawing = true;
    const { offsetX, offsetY } = e.touches ? e.touches[0] : e;
    [lastX, lastY] = [offsetX, offsetY];
  }
}

function stopDrawing() {
  isDrawing = false;
}

function handleResize() {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
  }
}

function addEventListeners() {
  canvas.value.addEventListener('mousedown', startDrawing);
  canvas.value.addEventListener('mousemove', draw);
  canvas.value.addEventListener('mouseup', stopDrawing);
  canvas.value.addEventListener('mouseout', stopDrawing);

  canvas.value.addEventListener('touchstart', startDrawing);
  canvas.value.addEventListener('touchmove', draw);
  canvas.value.addEventListener('touchend', stopDrawing);
  canvas.value.addEventListener('touchcancel', stopDrawing);

  window.addEventListener('resize', handleResize); // Handle window resize
}

function removeEventListeners() {
  canvas.value.removeEventListener('mousedown', startDrawing);
  canvas.value.removeEventListener('mousemove', draw);
  canvas.value.removeEventListener('mouseup', stopDrawing);
  canvas.value.removeEventListener('mouseout', stopDrawing);

  canvas.value.removeEventListener('touchstart', startDrawing);
  canvas.value.removeEventListener('touchmove', draw);
  canvas.value.removeEventListener('touchend', stopDrawing);
  canvas.value.removeEventListener('touchcancel', stopDrawing);

  window.removeEventListener('resize', handleResize); // Cleanup resize listener
}

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext('2d');
    handleResize(); // Initial resize to fit the window
    addEventListeners();
  }
});

onUnmounted(() => {
  if (canvas.value) {
    removeEventListeners();
  }
});
</script>

<template>
  <div class="container-canvas">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
}

.container-canvas {
  background: black;
  width: 90%;
  height: 60vh;
}

canvas {
  display: block;
  width: 110%;

}
</style>
