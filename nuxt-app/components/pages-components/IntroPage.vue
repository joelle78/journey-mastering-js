<script defer setup>
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
            <h3 tabindex="0">Discover <span>it</span> now</h3>
            <h2 tabindex="0">JS challenges & notes</h2>
          </div>
          <div>
            <p tabindex="0" v-if="props.homepage?.parIntroPage">{{ props.homepage.parIntroPage }}</p>
            <div class="buttons">
              <AtomsChallengesButton />
              <AtomsNotesButton />
<!--              <button aria-label="View challenges">-->
<!--                -->
<!--              </button>-->
<!--              <button aria-label="View notes">-->
<!--                -->
<!--              </button>-->
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
  width: 50%;
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
  gap: 1.5rem;
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

  .buttons {
    width: 25%;
  }



}


</style>