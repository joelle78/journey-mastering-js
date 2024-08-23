<script setup>
const props = defineProps({
  homepage: {
    type: Object,
    default: () => null,
  },
});
</script>

<template>
  <div id="introduction">
    <TemplatesGridBackground />
    <main>
      <header>
        <div class="home-container">
          <a href="/" aria-label="Go to home page">home</a>
        </div>
        <div class="flex-container-header">
          <div>
            <h3>Discover <span>it</span> now</h3>
            <h2>JS challenges & notes</h2>
          </div>
          <div>
            <p v-if="props.homepage?.parIntroPage">{{ props.homepage.parIntroPage }}</p>
            <div class="buttons">
              <button aria-label="View challenges">
                <AtomsChallengesButton />
              </button>
              <button aria-label="View notes">
                <AtomsNotesButton />
              </button>
            </div>
          </div>
        </div>
      </header>
    </main>
  </div>
</template>

<style scoped>
h3 {
  font-size: 3rem;
  width: 60%;
}

span {
  color: var(--yellow);
}

button {
  all: unset;
}

.buttons {
  display: flex;
  flex-direction: column;
}

main {
  position: absolute;
  margin-left: 2rem;
  top: 1rem;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

p {
  margin-top: 1.5rem;
  width: 80%;
}

.home-container {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 2rem;
  bottom: -3vh;
}

a {
  font-family: "Jost", sans-serif;
  text-transform: uppercase;
  color: #000000;
  text-decoration: none;
}

header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem
}

@media (min-width: 36rem) {
  header {
    gap: 2rem;
  }

  .buttons {
    margin-top: 2rem;
  }
}

/* MEDIA QUERY LAPTOP M*/
@media (min-width: 64rem) {
  h3 {
    font-size: 5rem;
    width: 90%;
  }

  p {
    max-width: 80%;
    margin-top: 7rem;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }

  .flex-container-header {
    display: flex;
    flex-direction: row;
    gap: 10rem;
    margin-left: 4rem;
  }


}


</style>