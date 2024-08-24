<script defer setup>
import { defineProps, onMounted } from 'vue';
import { getMarkdownContent, highlightCode } from '/composables/useMarkdown';

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
  <div id="challenge-four" class="container">
    <AtomsHomeButton/>
    <TemplatesGridBackground/>

    <main>
      <header class="flex-container-header">
        <h3 tabindex="0">
          Challenge <span class="yellow-span"> four </span>
          <span class="block-span">Color canvas</span>
        </h3>
        <a class="code-button" href="#popup4" aria-label="View code for challenge four" role="button">
          <AtomsCodeButton/>
        </a>
      </header>

      <!-- De popup zelf -->
      <div id="popup4" class="popup4" role="dialog" aria-modal="true" aria-labelledby="popup-title">
        <div class="popup-content" tabindex="-1">
          <a href="#challenge-four" class="close-btn" aria-label="Close code popup">&times;</a>

          <!-- Gebruik v-for om door de uitdagingen te loopen -->
          <ul>
            <li v-for="challenge in challenges" :key="challenge.id" v-html="getMarkdownContent(challenge.challengeThree)" />
          </ul>
        </div>
      </div>

      <MoleculesColorCanvas/>
    </main>

    <nav class="buttons-challenges" aria-label="Challenge navigation">
      <a href="#challenge-three" aria-label="Go to previous challenge">
        <AtomsButtonPrevious/>
      </a>
      <a href="#challenge-five" aria-label="Go to next challenge">
        <AtomsButtonNext/>
      </a>
    </nav>
  </div>
</template>

<style scoped>
main {
  position: absolute;
  margin-left: 2rem;
  top: 335vh;
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
  margin: 2.5rem 0 0 3rem;
}


/* Basisstijl voor de popup */
.popup4 {
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
#popup4:target {
  display: flex;
}


@media (min-width: 26rem) {
  .code-button {
    margin-left: 7rem;
  }
}

@media (min-width: 36rem) {
  main {
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-left: 0;
  }

  .flex-container-header {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  h3 {
    margin-left: 10rem;
    text-align: center;
  }
}

/* MEDIA QUERY LAPTOP M*/
@media (min-width: 64rem) {
  span {
    display: inline;
  }

  h3 {
    margin-left: 9rem;
  }
}
</style>