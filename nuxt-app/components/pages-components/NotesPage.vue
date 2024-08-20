<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="subject">Subject:</label>
        <input v-model="subject" id="subject" type="text" required />
      </div>
      <div>
        <label for="comment">Comment:</label>
        <textarea v-model="comment" id="comment" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="notes.length">
      <h2>Notes</h2>
      <ul>
        <li v-for="note in notes" :key="note.id">
          <h3>{{ note.subject }}</h3>
          <p>{{ note.comment }}</p>
        </li>
      </ul>
    </div>
    <div v-if="!notes.length && !loading">No notes available</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { createNote, getNotes } from '~/composables/useNotes';

const subject = ref('');
const comment = ref('');
const notes = ref([]);
const loading = ref(false);
const error = ref('');

const fetchNotes = async () => {
  loading.value = true;
  try {
    const result = await getNotes();
    console.log('Fetched notes:', result);
    notes.value = result || []; // Toewijzen van de opgehaalde notities
  } catch (err) {
    error.value = err.message;
    console.error('Fetch notes error:', err);
  } finally {
    loading.value = false;
  }
};

const submitForm = async () => {
  loading.value = true;
  error.value = '';
  try {
    await createNote(subject.value, comment.value);
    subject.value = '';
    comment.value = '';
    await fetchNotes(); // Herlaad de notities na succesvolle creatie
  } catch (err) {
    error.value = err.message;
    console.error('Submit form error:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchNotes);
</script>

<style>
/* Voeg hier je CSS-stijlen toe */
</style>
