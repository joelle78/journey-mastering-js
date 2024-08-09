<script setup>
import { onMounted, ref } from 'vue';

// Definieer referenties voor knoppen en audio-elementen
const keys = ref([]);
const audios = ref([]);

// Functie om de 'playing' klasse te verwijderen na afloop van de overgang
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

// Functie om het geluid af te spelen en de 'playing' klasse toe te voegen aan de toets
function playSound(e) {
  let keyCode;

  if (e.type === 'keydown') {
    keyCode = e.keyCode;
  } else if (e.type === 'click') {
    keyCode = parseInt(e.currentTarget.getAttribute('data-key'), 10);
  }

  const audio = audios.value.find(a => a.dataset.key == keyCode);
  const key = keys.value.find(k => k.dataset.key == keyCode);

  if (!audio) {
    console.log(`No audio element found for key code: ${keyCode}`);
    return;
  }
  if (!key) {
    console.log(`No key element found for key code: ${keyCode}`);
    return;
  }

  key.classList.add('playing');
  audio.currentTime = 0;
  try {
    audio.play();
  } catch (err) {
    console.error(`Failed to play audio for key code: ${keyCode}`, err);
  }
}

onMounted(() => {
  keys.value = Array.from(document.querySelectorAll('.key'));
  audios.value = Array.from(document.querySelectorAll('audio'));

  // Voeg event listeners toe voor knoppen en audio
  keys.value.forEach(key => {
    key.addEventListener('click', playSound);
    key.addEventListener('transitionend', removeTransition);
  });

  window.addEventListener('keydown', playSound);
});
</script>

<template>
  <div>
    <div class="keys">
      <div data-key="65" class="key" ref="keys">
        <kbd>A</kbd>
        <span class="sound">clap</span>
      </div>
      <div data-key="83" class="key" ref="keys">
        <kbd>S</kbd>
        <span class="sound">hihat</span>
      </div>
      <div data-key="68" class="key" ref="keys">
        <kbd>D</kbd>
        <span class="sound">kick</span>
      </div>
      <div data-key="70" class="key" ref="keys">
        <kbd>F</kbd>
        <span class="sound">openhat</span>
      </div>
      <div data-key="71" class="key" ref="keys">
        <kbd>G</kbd>
        <span class="sound">boom</span>
      </div>
      <div data-key="72" class="key" ref="keys">
        <kbd>H</kbd>
        <span class="sound">ride</span>
      </div>
      <div data-key="74" class="key" ref="keys">
        <kbd>J</kbd>
        <span class="sound">snare</span>
      </div>
      <div data-key="75" class="key" ref="keys">
        <kbd>K</kbd>
        <span class="sound">tom</span>
      </div>
      <div data-key="76" class="key" ref="keys">
        <kbd>L</kbd>
        <span class="sound">tink</span>
      </div>
    </div>

    <audio data-key="65" src="/sounds/clap.wav"></audio>
    <audio data-key="83" src="/sounds/hihat.wav"></audio>
    <audio data-key="68" src="/sounds/kick.wav"></audio>
    <audio data-key="70" src="/sounds/openhat.wav"></audio>
    <audio data-key="71" src="/sounds/boom.wav"></audio>
    <audio data-key="72" src="/sounds/ride.wav"></audio>
    <audio data-key="74" src="/sounds/snare.wav"></audio>
    <audio data-key="75" src="/sounds/tom.wav"></audio>
    <audio data-key="76" src="/sounds/tink.wav"></audio>
  </div>
</template>

<style scoped>
.keys {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
}

.key {
  flex: 1 1 calc(33.3333% - 10px); /* Zorgt ervoor dat er drie items per rij passen */
  border: .1rem solid black;
  border-radius: .5rem;
  font-size: 0.5rem;
  padding: 1rem .5rem;
  transition: all .07s ease;
  width: 1rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
  cursor: pointer; /* Zorg ervoor dat knoppen klikbaar zijn */
}

/* Optioneel: forceer een nieuwe rij na elke drie items */
.key:nth-child(3n+1) {
  clear: left;
}

.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}

kbd {
  display: block;
  font-size: 2rem;
}

.sound {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  color: #ffc600;
}
</style>
