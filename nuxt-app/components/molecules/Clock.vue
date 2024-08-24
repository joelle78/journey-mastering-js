<script defer setup>
import { ref, onMounted } from 'vue';

const secondHand = ref(null);
const minsHand = ref(null);
const hourHand = ref(null);



function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if (secondHand.value) {
    secondHand.value.style.transition = seconds === 0 ? 'none' : 'all 0.05s';
    secondHand.value.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  if (minsHand.value) {
    minsHand.value.style.transform = `rotate(${minsDegrees}deg)`;
  }

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  if (hourHand.value) {
    hourHand.value.style.transform = `rotate(${hourDegrees}deg)`;
  }
}

onMounted(() => {
  setDate();  // Zorg ervoor dat de klok niet wacht tot 1 seconde voor de eerste update
  setInterval(setDate, 1000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);  // Zorg ervoor dat het interval wordt opgeruimd
});


</script>

<template>
  <div class="clock" aria-roledescription="clock" >
    <div ref="hourHand" class="hand hour-hand" aria-hidden="true"></div>
    <div ref="minsHand" class="hand min-hand" aria-hidden="true"></div>
    <div ref="secondHand" class="hand second-hand" aria-hidden="true"></div>
  </div>
</template>

<style scoped>
.clock {
  position: relative;
  width: 250px;
  height: 250px;
  border: 5px solid #000000;
  border-radius: 50%;
  margin: 50px auto;
  background: #ffffff;
}

.hand {
  position: absolute;
  width: 40%;
  height: 2px;
  background: #000000;
  top: 50%;
  left: 10%;
  transform-origin: 100%;
  transition: all 0.05s;
}

.second-hand {
  background: var(--yellow, #F0DC55);
  height: 1px;
}

/* MEDIA QUERY LAPTOP M*/
@media (min-width: 64rem) {
  .clock {
    width: 350px;
    height: 350px;
    margin-top: 2rem;
  }
}


</style>
