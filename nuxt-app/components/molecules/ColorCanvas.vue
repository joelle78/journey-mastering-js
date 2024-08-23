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
  const rect = canvas.value.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

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
  e.preventDefault(); // Prevent default behavior (scrolling, etc.)
  if (ctx) {
    isDrawing = true;
    const rect = canvas.value.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    [lastX, lastY] = [offsetX, offsetY];
  }
}

function stopDrawing(e) {
  e.preventDefault(); // Prevent default behavior (scrolling, etc.)
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

  canvas.value.addEventListener('touchstart', (e) => {
    e.preventDefault();
    // Use the first touch point
    const touch = e.touches[0];
    const rect = canvas.value.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left;
    const offsetY = touch.clientY - rect.top;
    [lastX, lastY] = [offsetX, offsetY];
    isDrawing = true;
  });

  canvas.value.addEventListener('touchmove', (e) => {
    e.preventDefault();
    // Use the first touch point
    const touch = e.touches[0];
    const rect = canvas.value.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left;
    const offsetY = touch.clientY - rect.top;
    draw({ clientX: offsetX + rect.left, clientY: offsetY + rect.top });
  });

  canvas.value.addEventListener('touchend', stopDrawing);
  canvas.value.addEventListener('touchcancel', stopDrawing);

  window.addEventListener('resize', handleResize); // Handle window resize
}

function removeEventListeners() {
  canvas.value.removeEventListener('mousedown', startDrawing);
  canvas.value.removeEventListener('mousemove', draw);
  canvas.value.removeEventListener('mouseup', stopDrawing);
  canvas.value.removeEventListener('mouseout', stopDrawing);

  canvas.value.removeEventListener('touchstart', (e) => {
    e.preventDefault();
    // Use the first touch point
    const touch = e.touches[0];
    const rect = canvas.value.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left;
    const offsetY = touch.clientY - rect.top;
    [lastX, lastY] = [offsetX, offsetY];
    isDrawing = true;
  });

  canvas.value.removeEventListener('touchmove', (e) => {
    e.preventDefault();
    // Use the first touch point
    const touch = e.touches[0];
    const rect = canvas.value.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left;
    const offsetY = touch.clientY - rect.top;
    draw({ clientX: offsetX + rect.left, clientY: offsetY + rect.top });
  });

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
  <div>
    <canvas ref="canvas" aria-label="Drawing Canvas"></canvas>
  </div>
</template>

<style scoped>
canvas {
  display: block;
  background: #fff;
  touch-action: none; /* Prevent default touch actions */
  width: 80vw;
  height: 60vh;
}

/* MEDIA QUERY LAPTOP M*/
@media (min-width: 64rem) {
  canvas {
    width: 90vw;
    height: 65vh;
  }
}

@media (min-width: 90rem) {
  canvas {
    height: 70vh;
  }
}
</style>
