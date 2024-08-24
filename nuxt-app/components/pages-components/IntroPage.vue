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
    <TemplatesGridBackground/>
    <main>
      <header>
        <div class="home-container">
          <a href="/" aria-label="Go to home page">home</a>
        </div>
        <div class="flex-container-header">
          <div class="text-container">
            <h3 tabindex="0">Discover <span>it</span> now</h3>
            <h2 tabindex="0">JS challenges & notes</h2>
          </div>
          <div class="content-container">
            <!-- Use a placeholder or skeleton screen while data is loading -->
            <p tabindex="0" v-if="props.homepage?.parIntroPage">
              {{ props.homepage.parIntroPage }}
            </p>
            <noscript>
              <p>
                Ik ben bezig met verschillende JS challenges, waarin ik mezelf verdiep in verschillende
                JavaScript-concepten en -technieken. Tijdens deze challenges pak ik diverse uitdagingen aan die mijn
                vaardigheden aanscherpen en mijn kennis verdiepen. De resultaten van deze uitdagingen deel ik hier,
                zodat je mijn voortgang kunt volgen. Daarnaast publiceer ik ook mijn notities en observaties, waarin ik
                mijn aanpak, leerpunten en eventuele valkuilen bespreek.
              </p>
            </noscript>
            <div class="buttons">
              <AtomsChallengesButton/>
              <AtomsNotesButton/>
            </div>
          </div>
        </div>
      </header>
    </main>
  </div>
</template>

<style scoped>
.text-container {
  width: 100%;
  max-width: 80%;
  min-height: 4rem;
}

.content-container {
  width: 100%;
  max-width: 90%;
}

h3 {
  font-size: 3rem;
  width: 80%;
}

span {
  color: var(--yellow, #F0DC55);
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

/* MEDIA QUERY LAPTOP M */
@media (min-width: 64rem) {
  h3 {
    font-size: 5rem;
    width: 80%;
  }

  p {
    max-width: 100%;
    margin-top: 4rem;
    font-size: 1.1rem;
    line-height: 1.6rem;
  }

  .flex-container-header {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    margin-left: 4rem;
  }

  .buttons {
    width: 25%;
  }
}

@media (min-width: 90rem) {
  h3 {
    width: 50%;
  }

  p {
    font-size: 1.3rem;
  }

  .content-container {
    margin-top: 5rem;
  }
}
</style>
