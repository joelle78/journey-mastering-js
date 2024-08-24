<script defer setup>
import { ref, onMounted, watchEffect } from 'vue';
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
    notes.value = result || [];
  } catch (err) {
    error.value = err.message;
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
    await fetchNotes();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchNotes);

watchEffect(() => {
  if (notes.value.length) {
    fetchNotes();
  }
});
</script>


<template>
  <div>
    <header>
      <h1 tabindex="0">Notities</h1>
      <a href="/introduction" aria-label="Return to introduction page">Return</a>
    </header>


    <div v-if="notes.length">
      <div class="scroll-container">
        <ul class="scroll-content" role="list" aria-label="Notes list">
          <li v-for="note in notes" :key="note.id" tabindex="1">
            <h3 >{{ note.subject }}</h3>
            <div>
              <p>{{ note.comment }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="!notes.length && !loading" role="status" aria-live="polite">No notes available</div>

    <section class="form-container">
      <form @submit.prevent="submitForm" aria-labelledby="form-heading">
        <div>
          <label for="subject">Subject:</label>
          <input
              placeholder="Typ hier het onderwerp van het bericht"
              v-model="subject"
              id="subject"
              type="text"
              required
              aria-required="true"
          />
        </div>
        <div>
          <label for="comment">Comment:</label>
          <textarea
              placeholder="Typ hier je bericht"
              v-model="comment"
              id="comment"
              required
              aria-required="true"
          ></textarea>
        </div>
        <button class="button-block" type="submit">Submit</button>
      </form>
    </section>
  </div>
</template>


<style scoped>
h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  max-width: 80vw;
  max-height: 20vh;
  overflow: auto;
  margin: 0;
}

header {
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: -8vh;
  width: 80vw;
}

a {
  margin-top: 0.8rem;
  font-family: "Jost", sans-serif;
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
}

.form-container {
  display: flex;
  margin-top: 1rem;
}

.scroll-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.scroll-content {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0;
  margin: 5rem 0 0 0;
  list-style-type: none;
  width: 100%;
  box-sizing: border-box;
  scroll-snap-type: x mandatory;

  /* Voor Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--yellow) rgba(0, 0, 0, 0.1);
}

/* Voor WebKit-gebaseerde browsers (zoals Chrome en Safari) */
.scroll-content::-webkit-scrollbar {
  height: 8px;
}

.scroll-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

.scroll-content::-webkit-scrollbar-thumb {
  background: var(--yellow);
  border-radius: 10px;
}

ul {
  max-width: 80vw;
}

li {
  flex: 0 0 100%;
  margin-right: 3rem;
  min-width: 300px;
  box-sizing: border-box;
  scroll-snap-align: center;
}

li:focus {
  outline: 2px solid var(--yellow); /* Pas de focusstijl aan naar wens */
  outline-offset: 4px; /* Voor wat extra ruimte rond het item */
}

label {
  display: block;
  font-family: "Jost", sans-serif;
}

input {
  width: 80vw;
  font-family: "Jost", sans-serif;
}

textarea {
  font-family: "Jost", sans-serif;
  width: 80vw;
  height: 20vh;
  resize: none;
}

input:focus, textarea:focus {
  border-color: var(--yellow);
}

button {
  margin-top: 0.5rem;
}

@media (min-width: 36rem) {
  p {
    max-width: 85vw;
  }

  header {
    width: 90vw;
  }

  ul {
    max-width: 70vw;
  }

  .form-container {
    margin-top: 1rem;
  }

  input {
    width: 30vw;
  }


  textarea {
    max-width: 70vw;
  }
}

@media (min-width: 64rem) {
  p {
    max-width: 93vw;
    max-height: 20vh;
  }

  ul {
    max-width: 70vw;
  }
}

@media (min-width: 90rem) {
  p {
    max-width: 100vw;
    min-height: 25vh;
  }

  header {
    min-width: 94vw;
  }

  ul {
    max-width: 70vw;
  }
}
</style>
