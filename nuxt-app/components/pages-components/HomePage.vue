<script setup>
const props = defineProps({
  homepage: {
    type: Object,
    default: () => null,
  },
});
</script>

<template>
  <div class="container">
    <TemplatesGridBackground />
    <main>
      <div class="flex-container">
        <header>
          <h1>Welcome to <span class="yellow-span ">my</span> journey</h1>
          <h2>Of mastering Javascript</h2>
        </header>

        <div class="flex-container-text">
          <p v-if="props.homepage?.introHomePage">{{ props.homepage.introHomePage }}</p>
          <div class="buttons">
            <AtomsExploreButton />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Voeg hier je stijlen toe indien nodig */
h1 {
  width: 80%;
}

h2 {
  margin-top: 2rem;
}

p {
  margin-top: 2rem;
  max-width: 90%;
}

main {
  position: absolute;
  margin-left: 2rem;
  top: 5rem;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 9999;
}

@media (min-width: 36rem) {
  h1 {
    width: 40%;
  }

  main {
    height: 90vh;
    margin-top: 3rem;
  }

  .buttons {
    margin-top: 2rem;
  }
}

/* MEDIA QUERY LAPTOP M*/
@media (min-width: 64rem) {
  .flex-container {
    display: flex;
    gap: 5rem;
  }

  header {
    width: 100vw;
    margin-left: 2rem;
    margin-bottom: 15rem;
  }

  .flex-container-text {
    margin-top: 5rem;
  }

  h1 {
    width: 70%;
  }

  p {
    width: 60%;
  }
}


@media (min-width: 90rem) {
  .flex-container {
    gap: 3rem;
  }

  header {
    width: 100vw;
    margin-left: 4rem;
    margin-bottom: 20rem;
  }

  .flex-container-text {
    margin-top: 8rem;
  }

  h1 {
    width: 70%;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.6rem;
    width: 60%;
  }
}
</style>
