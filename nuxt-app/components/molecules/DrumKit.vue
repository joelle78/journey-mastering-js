<script defer setup>
import { onMounted, onUnmounted } from 'vue';

const sounds = [
  { key: 65, sound: 'clap', src: '/sounds/clap.wav' },
  { key: 83, sound: 'hihat', src: '/sounds/hihat.wav' },
  { key: 68, sound: 'kick', src: '/sounds/kick.wav' },
  { key: 70, sound: 'openhat', src: '/sounds/openhat.wav' },
  { key: 71, sound: 'boom', src: '/sounds/boom.wav' },
  { key: 72, sound: 'ride', src: '/sounds/ride.wav' },
  { key: 74, sound: 'snare', src: '/sounds/snare.wav' },
  { key: 75, sound: 'tom', src: '/sounds/tom.wav' },
  { key: 76, sound: 'tink', src: '/sounds/tink.wav' }
];

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio || !key) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function handleKeydown(e) {
  const keyCode = e.keyCode;
  playSound(keyCode);
}

function handleClick(e) {
  const keyCode = e.target.closest('.key')?.dataset.key;
  if (keyCode) playSound(keyCode);
}

// functie dat je op een key kunt drukken met Enter of Spatie wanneer deze is gefocust.
function handleKeydownOnKey(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    const keyCode = e.target.dataset.key;
    if (keyCode) {
      e.preventDefault();
      playSound(keyCode);
    }
  }
}

onMounted(() => {
  const keysContainer = document.querySelector('.keys');
  const keys = document.querySelectorAll('.key');

  keysContainer.addEventListener('transitionend', removeTransition);
  keysContainer.addEventListener('click', handleClick);

  keys.forEach(key => key.addEventListener('keydown', handleKeydownOnKey));
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  const keysContainer = document.querySelector('.keys');
  const keys = document.querySelectorAll('.key');

  keysContainer.removeEventListener('transitionend', removeTransition);
  keysContainer.removeEventListener('click', handleClick);

  keys.forEach(key => key.removeEventListener('keydown', handleKeydownOnKey));
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div>
    <div class="keys">
      <div
          v-for="sound in sounds"
          :key="sound.key"
          :data-key="sound.key"
          class="key"
          tabindex="0"
      >
        <kbd>{{ String.fromCharCode(sound.key) }}</kbd>
        <span class="sound">{{ sound.sound }}</span>
      </div>
    </div>

    <audio
        v-for="sound in sounds"
        :key="sound.key"
        :data-key="sound.key"
        :src="sound.src"
    ></audio>
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
  flex: 1 1 calc(33.3333% - 10px);
  border: .1rem solid black;
  border-radius: .5rem;
  font-size: 0.5rem;
  padding: 1rem .5rem;
  transition: all .07s ease;
  width: 1rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 .5rem black;
}

.key:nth-child(3n+1) {
  clear: left;
}

.key:focus {
  outline: none;
  border: 4px solid var(--yellow, #F0DC55);
  box-shadow: 0 0 5px var(--yellow, #F0DC55);
}

.playing {
  transform: scale(1.1);
  border-color: var(--yellow, #F0DC55);
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
  color: var(--yellow, #F0DC55);
}

/* MEDIA QUERY LAPTOP M*/
@media (min-width: 64rem) {
  .keys {
    margin-top: 3rem;
    margin-left: 0;
  }

  .key {
    width: 2rem;
    font-size: 1.5rem;
  }
}
</style>
