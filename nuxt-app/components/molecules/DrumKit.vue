<script setup>
import { onMounted, onUnmounted } from 'vue';

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

onMounted(() => {
  const keysContainer = document.querySelector('.keys');

  keysContainer.addEventListener('transitionend', removeTransition);
  keysContainer.addEventListener('click', handleClick);

  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  const keysContainer = document.querySelector('.keys');

  keysContainer.removeEventListener('transitionend', removeTransition);
  keysContainer.removeEventListener('click', handleClick);

  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div>
    <div class="keys">
      <div data-key="65" class="key">
        <kbd>A</kbd>
        <span class="sound">clap</span>
      </div>
      <div data-key="83" class="key">
        <kbd>S</kbd>
        <span class="sound">hihat</span>
      </div>
      <div data-key="68" class="key">
        <kbd>D</kbd>
        <span class="sound">kick</span>
      </div>
      <div data-key="70" class="key">
        <kbd>F</kbd>
        <span class="sound">openhat</span>
      </div>
      <div data-key="71" class="key">
        <kbd>G</kbd>
        <span class="sound">boom</span>
      </div>
      <div data-key="72" class="key">
        <kbd>H</kbd>
        <span class="sound">ride</span>
      </div>
      <div data-key="74" class="key">
        <kbd>J</kbd>
        <span class="sound">snare</span>
      </div>
      <div data-key="75" class="key">
        <kbd>K</kbd>
        <span class="sound">tom</span>
      </div>
      <div data-key="76" class="key">
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

/* MEDIA QUERY LAPTOP M*/
@media (min-width: 64rem) {
  .keys {
    margin-top: 2rem;
    margin-left: 0;
  }

  .key {
    width: 2rem;
    font-size: 1.5rem;
  }
}
</style>
