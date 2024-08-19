<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const hero = ref(null);
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero.value;
  let x, y;

  if (e.type.includes('mouse')) {
    // Muisgebeurtenis
    x = e.offsetX;
    y = e.offsetY;

    if (e.target !== hero.value) {
      const targetRect = e.target.getBoundingClientRect();
      const heroRect = hero.value.getBoundingClientRect();
      x = e.clientX - heroRect.left;
      y = e.clientY - heroRect.top;
    }
  } else if (e.type.includes('touch')) {
    // Touchgebeurtenis
    const touch = e.touches[0];
    const heroRect = hero.value.getBoundingClientRect();
    x = touch.clientX - heroRect.left;
    y = touch.clientY - heroRect.top;
  }

  // Bereken de hoeveelheid text-shadow verschuiving
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  hero.value.querySelector('h1').style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}

onMounted(() => {
  if (hero.value) {
    hero.value.addEventListener('mousemove', shadow);
    hero.value.addEventListener('touchmove', shadow);
  }
});

onBeforeUnmount(() => {
  if (hero.value) {
    hero.value.removeEventListener('mousemove', shadow);
    hero.value.removeEventListener('touchmove', shadow);
  }
});
</script>

<template>
  <div ref="hero" class="hero">
    <h1>🔥SHADOW!</h1>
  </div>
</template>

<style scoped>
.hero {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
}

h1 {
  text-shadow: 10px 10px 0 rgba(0, 0, 0, 0.3);
  font-size: 3rem;

}
</style>
