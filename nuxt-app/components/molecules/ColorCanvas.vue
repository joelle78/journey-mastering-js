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

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) hue = 0;

  ctx.lineWidth += direction ? 1 : -1;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
}

function startDrawing(e) {
  if (ctx) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
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

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext('2d');
    handleResize(); // Initial resize to fit the window

    canvas.value.addEventListener('mousedown', startDrawing);
    canvas.value.addEventListener('mousemove', draw);
    canvas.value.addEventListener('mouseup', stopDrawing);
    canvas.value.addEventListener('mouseout', stopDrawing);

    window.addEventListener('resize', handleResize); // Handle window resize
  }
});

onUnmounted(() => {
  if (canvas.value) {
    canvas.value.removeEventListener('mousedown', startDrawing);
    canvas.value.removeEventListener('mousemove', draw);
    canvas.value.removeEventListener('mouseup', stopDrawing);
    canvas.value.removeEventListener('mouseout', stopDrawing);

    window.removeEventListener('resize', handleResize); // Cleanup resize listener
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
  width: 110%;

}
</style>
