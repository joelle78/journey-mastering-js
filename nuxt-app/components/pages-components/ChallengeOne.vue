<script setup>
import {defineProps, onMounted} from 'vue';
import {getMarkdownContent, highlightCode} from '/composables/useMarkdown';

const props = defineProps({
  challenges: {
    type: Array,
    default: () => []
  }
});

onMounted(() => {
  highlightCode();
});
</script>

<template>
  <div id="challenge-one" class="container">
    <TemplatesGridBackground/>

    <main>
      <header class="flex-container-header">
        <h3>Challenge <span class="yellow-span">one</span> drumkit</h3>
        <a class="code-button" href="#popup">
          <AtomsCodeButton/>
        </a>
      </header>

      <!-- De popup zelf -->
      <div id="popup" class="popup">
        <div class="popup-content">
          <a href="#" class="close-btn">&times;</a>

          <!-- Gebruik v-for om door de uitdagingen te lopen -->
          <ul>
            <li v-for="challenge in challenges" :key="challenge.id"
                v-html="getMarkdownContent(challenge.challengeOne)"/>
          </ul>

        </div>
      </div>

      <MoleculesDrumKit/>
    </main>

    <div class="buttons-challenges">
      <a href="/">
        <AtomsButtonPrevious/>
      </a>
      <a href="#challenge-two">
        <AtomsButtonNext/>
      </a>
    </div>
  </div>
</template>

<style scoped>
main {
  position: absolute;
  margin-left: 2rem;
  top: 5rem;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.flex-container-header {
  display: flex;
  flex-direction: row;
}

.code-button {
  margin-right: 2rem;
}

/* Basisstijl voor de popup */
.popup {
  display: none; /* Verberg de popup standaard */
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Wanneer de popup het doel is, toon het */
#popup:target {
  display: flex;
}


@media (min-width: 26rem) {
  .code-button {
    margin-left: 5rem;
  }
}

@media (min-width: 36rem) {
  main {
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-left: 0;
  }

  h3 {
    margin-left: 10rem;
  }

  .code-button {
    margin-left: 4rem;
  }
}

/* MEDIA QUERY LAPTOP M*/
@media (min-width: 64rem) {
  h3 {
    margin-left: 9rem;
  }
}

</style>
