<script setup>
import { defineProps, onMounted } from 'vue';
import { getMarkdownContent, highlightCode } from '/composables/useMarkdown';
import ColorCanvas from "~/components/molecules/ColorCanvas.vue";


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


  <div id="challenge-four" class="container">
    <TemplatesGridBackground/>

    <main>
      <div class="flex-container-header">
        <h3>Challenge four <span>Color canvas</span></h3>
        <a class="code-button" href="#popup4">
          <AtomsCodeButton/>
        </a>

        <!-- De popup zelf -->
        <div id="popup4" class="popup4">
          <div class="popup-content">
            <a href="#" class="close-btn">&times;</a>

            <!-- Gebruik v-for om door de uitdagingen te loopen -->
            <ul>
              <li v-for="challenge in challenges" :key="challenge.id" v-html="getMarkdownContent(challenge.challengeThree)" />
            </ul>
          </div>
        </div>


      </div>
      <ColorCanvas/>

    </main>

    <div class="buttons">
      <a href="#challenge-three"><AtomsButtonPrevious/></a>
      <a href="#challenge-five"><AtomsButtonNext/></a>
    </div>

  </div>
</template>

<style scoped>
span {
  display: block;
}

main {
  position: absolute;
  margin-left: 2rem;
  top: 325vh;
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
</style>