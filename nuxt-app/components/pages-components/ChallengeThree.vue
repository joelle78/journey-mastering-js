<script setup>
import {ref, onMounted} from 'vue';
import {useChallenges} from '@/composables/useChallenges';

const showPopup = ref(false);

const challenges = ref([]);

const togglePopup = () => {
  showPopup.value = !showPopup.value;
};

onMounted(async () => {
  const {challenges: fetchedChallenges, error} = await useChallenges();

  if (!error.value) {
    challenges.value = fetchedChallenges.map(challenge => ({
      id: challenge.id || 2, //
      content: challenge.challengeThree
    }));
  } else {
    console.error('Er is een fout opgetreden bij het ophalen van de data:', error.value);
  }
});
</script>

<template>
  <div id="challenge-three" class="container">
    <AtomsHomeButton/>
    <TemplatesGridBackground/>

    <main>
      <header class="flex-container-header">
        <h3 tabindex="0">
          Challenge <span class="yellow-span"> three </span>
          <span class="block-span">CSS variables</span>
        </h3>
        <a href="#" @click.prevent="togglePopup" class="code-button" aria-label="View code for challenge two" role="button">
          <AtomsCodeButton />
        </a>
      </header>

      <OrganismsChallengePopup :visible="showPopup" :challenges="challenges" @close="togglePopup" />

      <MoleculesCssVariables/>
    </main>

    <nav class="buttons-challenges" aria-label="Challenge navigation">
      <AtomsDynamicButton
          label="Previous"
          href="#challenge-two"
          ariaLabel="Go to challenge two"
      />
      <AtomsDynamicButton
          label="Next"
          href="#challenge-four"
          ariaLabel="Go to challenge four"
      />
    </nav>
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
  width: 3.1rem;
  height: 3.3rem;
  margin: 2.5rem 1rem 0 0;
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