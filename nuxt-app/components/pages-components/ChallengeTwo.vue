<script setup>
import { defineProps, onMounted } from 'vue';
import { getMarkdownContent, highlightCode } from '/composables/useMarkdown';


// Ontvang de props met markdown content
const props = defineProps({
  challenges: {
    type: Array,
    default: () => []
  }
});

// Watch for changes and highlight code
onMounted(() => {
  highlightCode();
});
</script>

<template>
  <div id="challenge-two" class="container">
    <AtomsHomeButton/>
    <TemplatesGridBackground/>

    <main>
      <header class="flex-container-header">
        <h3>Challenge <span class="yellow-span">two</span> <span class="block-span">current time</span></h3>
        <a class="code-button" href="#popup2">
          <AtomsCodeButton/>
        </a>
      </header>

        <!-- De popup zelf -->
        <div id="popup2" class="popup2">
          <div class="popup-content">
            <a href="#" class="close-btn">&times;</a>

            <!-- Gebruik v-for om door de uitdagingen te lopen -->
            <ul>
              <li v-for="challenge in challenges" :key="challenge.id" v-html="getMarkdownContent(challenge.challengeTwo)" />
            </ul>
          </div>
        </div>

      <MoleculesClock/>
    </main>

    <div class="buttons">
      <a href="#challenge-one"><AtomsButtonPrevious/></a>
      <a href="#challenge-three"><AtomsButtonNext/></a>
    </div>

  </div>
</template>

<style scoped>


main {
  position: absolute;
  margin-left: 2rem;
  top: 115vh;
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
  margin-left: 4rem;
}


/* Basisstijl voor de popup */
.popup2 {
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
#popup2:target {
  display: flex;
}

/* Stijl voor de inhoud van de popup */
.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 80%;
  max-width: 500px;
}

/* Sluitknop van de popup */
.close-btn {
  position: absolute;
  top: -5px;
  right: 10px;
  font-size: 30px;
  text-decoration: none;
  color: #000000;
}


li {
  font-size: 0.5rem;
  list-style: none;
}

.buttons {
  padding: 0 3rem 0 3rem;
  position: relative;
  top: -5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    margin-left: 11rem;
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