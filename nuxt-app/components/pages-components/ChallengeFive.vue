<script setup>
import {ref, onMounted} from 'vue';
import {useChallenges} from '@/composables/useChallenges';

// State voor de zichtbaarheid van de popup
const showPopup = ref(false);

// State voor de challenges data
const challenges = ref([]);

// Functie om de popup te toggelen
const togglePopup = () => {
  showPopup.value = !showPopup.value;
};

// Data ophalen van het CMS wanneer de component gemount wordt
onMounted(async () => {
  const {challenges: fetchedChallenges, error} = await useChallenges();

  if (!error.value) {
    challenges.value = fetchedChallenges.map(challenge => ({
      id: challenge.id || 2,
      content: challenge.challengeFive
    }));
  } else {
    console.error('Er is een fout opgetreden bij het ophalen van de data:', error.value);
  }
});
</script>

<template>
  <div id="challenge-five" class="container">
    <AtomsHomeButton/>
    <TemplatesGridBackground/>

    <main>
      <header class="flex-container-header">
        <h3 tabindex="0">
          Challenge <span class="yellow-span"> five </span>
          <span class="block-span">move shadow</span>
        </h3>

        <a href="#" @click.prevent="togglePopup" class="code-button" aria-label="View code for challenge two" role="button">
          <AtomsCodeButton />
        </a>
      </header>

      <OrganismsChallengePopup :visible="showPopup" :challenges="challenges" @close="togglePopup" />

      <MoleculesMoveShadow/>
    </main>

    <nav class="buttons-challenges" aria-label="Challenge navigation">
      <a href="#challenge-four" aria-label="Go to previous challenge">
        <AtomsButtonPrevious/>
      </a>
      <a href="#challenge-six" aria-label="Go to next challenge">
        <AtomsButtonNext/>
      </a>
    </nav>
  </div>
</template>


<style scoped>
main {
  position: absolute;
  margin-left: 2rem;
  top: 440vh;
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
  width: 3.1rem;
  height: 3.3rem;
  margin: 2.5rem 0 0 3rem;
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