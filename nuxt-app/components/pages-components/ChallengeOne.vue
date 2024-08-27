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
      content: challenge.challengeOne
    }));
  } else {
    console.error('Er is een fout opgetreden bij het ophalen van de data:', error.value);
  }
});
</script>


<template>
  <div id="challenge-one" class="container">
    <TemplatesGridBackground/>

    <main>
      <header class="flex-container-header">
        <h3 tabindex="0">
          Challenge <span class="yellow-span"> one </span>
          <span class="block-span">drumkit</span>
        </h3>

        <a href="#" @click.prevent="togglePopup" class="code-button" aria-label="View code for challenge one" role="button">
          <AtomsCodeButton />
        </a>
      </header>

      <OrganismsChallengePopup :visible="showPopup" :challenges="challenges" @close="togglePopup" />

      <MoleculesDrumKit />
    </main>

    <nav class="buttons-challenges" aria-label="Challenge navigation">
      <AtomsDynamicButton
          label="Previous"
          href="/introduction"
          ariaLabel="Go to introduction page"
      />
      <AtomsDynamicButton
          label="Next"
          href="#challenge-two"
          ariaLabel="Go to challenge two"
      />
    </nav>

  </div>
</template>

<style scoped>
main {
  position: absolute;
  margin-left: 2rem;
  top: 3rem;
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
    text-align: center;
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

  span {
    display: inline;
  }
}

</style>
