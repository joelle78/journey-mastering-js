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
        <h3>Discover</h3>
        <h2>JS challenges & notities</h2>
        <p v-if="props.homepage?.parIntroPage">{{ props.homepage.parIntroPage }}</p>
      </header>

      <section class="buttons">
        <AtomsChallengesButton/>
        <AtomsNotesButton/>
      </section>
    </main>
  </div>
</template>
<style scoped>
h3 {
  font-size: 3rem;
}

main {
  position: absolute;
  margin-left: 2rem;
  top: 5rem;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

p {
  width: 80%;
}

header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem
}


</style>