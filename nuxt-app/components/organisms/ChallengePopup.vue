<script setup>
import {defineProps, defineEmits, onMounted, watch, nextTick} from 'vue';
import {getMarkdownContent, highlightCode} from '/composables/useMarkdown';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  challenges: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['close']);

const closePopup = () => {
  emit('close');
};

// Functie om de code te highlighten nadat de DOM is bijgewerkt
const updateHighlighting = async () => {
  await nextTick(); // Wacht tot de DOM-updates zijn voltooid
  highlightCode();
};

onMounted(() => {
  updateHighlighting();
});

watch(() => props.visible, (newValue) => {
  if (newValue) {
    updateHighlighting();
  }
});

watch(() => props.challenges, () => {
  if (props.visible) {
    updateHighlighting();
  }
});
</script>

<template>
  <div
      v-if="visible"
      class="popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
  >
    <div class="popup-content" tabindex="-1">
      <a
          href="#"
          @click.prevent="closePopup"
          class="close-btn"
          aria-label="Close code popup"
      >&times;</a
      >

      <ul>
        <li
            v-for="challenge in challenges"
            :key="challenge.id"
            v-html="getMarkdownContent(challenge.content)"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.popup-content {
  background-color: white;
  outline: 2px solid var(--yellow);
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 90%;
  max-height: 400px;
  overflow-y: auto;
  z-index: 9999;
}

.close-btn {
  position: absolute;
  top: -5px;
  right: 10px;
  font-size: 30px;
  text-decoration: none;
  color: #000000;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

@media (min-width: 36rem) {
  .popup-content {
    min-width: 80%;
  }
}

</style>
