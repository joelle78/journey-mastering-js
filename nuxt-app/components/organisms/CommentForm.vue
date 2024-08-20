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

<template>
<div>

  <div v-if="loading">Loading...</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="notes.length">
    <h3>Notes</h3>
    <ul>
      <li v-for="note in notes" :key="note.id">
        <h3>{{ note.subject }}</h3>
        <div>
        <p>{{ note.comment }}</p>
        </div>
      </li>
    </ul>
  </div>
  <div v-if="!notes.length && !loading">No notes available</div>

  <section class="form-container">
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
  </section>

</div>
</template>

<style scoped>
p {
  max-width: 80vw;
  max-height: 20vh;
  overflow: auto;
  margin: 0;
}

.form-container {
  display: flex;
  margin-top: 3rem;
}

ul {
  display: flex; /* Horizontale uitlijning van berichten */
  flex-wrap: nowrap; /* Voorkomt dat de berichten naar een nieuwe regel springen */
  overflow-x: auto; /* Voegt een horizontale scrollbalk toe */
  -webkit-overflow-scrolling: touch; /* Zorgt voor vloeiend scrollen op touch-apparaten */
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 100vw; /* Past zich aan de volledige breedte aan */
  box-sizing: border-box;
}

li {
  flex: 0 0 auto; /* Zorgt ervoor dat elk bericht zijn eigen breedte behoudt */
  margin-right: 3rem; /* Ruimte tussen de berichten */
  min-width: 300px; /* Optionele minimale breedte voor elk bericht */
  box-sizing: border-box;
}

label {
  display: block;
}

input {
  width: 80vw;
}

textarea {
  width: 80vw;
  height: 20vh;
}
</style>
