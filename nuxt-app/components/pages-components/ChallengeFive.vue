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


  <div id="challenge-five" class="container">
    <AtomsHomeButton/>
    <TemplatesGridBackground/>

    <main>
      <header class="flex-container-header">
        <h3>Challenge <span class="yellow-span">five</span> <span class="block-span">move shadow</span></h3>
        <a class="code-button" href="#popup5">
          <AtomsCodeButton/>
        </a>
      </header>

        <!-- De popup zelf -->
        <div id="popup5" class="popup5">
          <div class="popup-content">
            <a href="#" class="close-btn">&times;</a>

            <!-- Gebruik v-for om door de uitdagingen te loopen -->
            <ul>
              <li v-for="challenge in challenges" :key="challenge.id" v-html="getMarkdownContent(challenge.challengeThree)" />
            </ul>
          </div>
        </div>

      <MoleculesMoveShadow/>

    </main>

    <div class="buttons-challenges">
      <a href="#challenge-four"><AtomsButtonPrevious/></a>
      <a href="#challenge-six"><AtomsButtonNext/></a>
    </div>

  </div>
</template>

<style scoped>
main {
  position: absolute;
  margin-left: 2rem;
  top: 425vh;
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
  margin-left: 3rem;
}


/* Basisstijl voor de popup */
.popup5 {
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
#popup5:target {
  display: flex;
}


@media (min-width: 26rem) {
  .code-button {
    margin-left: 6rem;
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
    margin-left: 10rem;
  }
}

</style>