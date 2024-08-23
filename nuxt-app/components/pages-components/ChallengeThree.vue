<script setup>
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


  <div id="challenge-three" class="container">
    <AtomsHomeButton/>
    <TemplatesGridBackground/>

    <main>
      <header class="flex-container-header">
        <h3>Challenge <span class="yellow-span">three</span> <span>CSS variables</span></h3>
        <a class="code-button" href="#popup3">
          <AtomsCodeButton/>
        </a>
      </header>


      <!-- De popup zelf -->
        <div id="popup3" class="popup3">
          <div class="popup-content">
            <a href="#challenge-three" class="close-btn">&times;</a>

            <!-- Gebruik v-for om door de uitdagingen te loopen -->
            <ul>
              <li v-for="challenge in challenges" :key="challenge.id" v-html="getMarkdownContent(challenge.challengeThree)" />
            </ul>
          </div>
        </div>

      <MoleculesCssVariables/>
    </main>

    <div class="buttons-challenges">
      <a href="#challenge-two"><AtomsButtonPrevious/></a>
      <a href="#challenge-four"><AtomsButtonNext/></a>
    </div>

  </div>
</template>

<style scoped>


main {
  position: absolute;
  margin-left: 2rem;
  top: 225vh;
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
  margin: 2.5rem 1rem 0 0;
}


/* Basisstijl voor de popup */
.popup3 {
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
#popup3:target {
  display: flex;
}


@media (min-width: 26rem) {
  .code-button {
    margin-right: 2rem;
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
    margin-left: 6rem;
    text-align: center;
  }
}

/* MEDIA QUERY LAPTOP M*/
@media (min-width: 64rem) {
  span {
    display: inline;
  }

  h3 {
    margin-left: 11rem;
  }

  .code-button {
    margin-left: 5rem;
  }
}
</style>