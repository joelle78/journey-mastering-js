<script setup>
const props = defineProps({
  homepage: {
    type: Object,
    default: null
  }
});
</script>

<template>
  <div>
    <TemplatesGridBackground/>

    <main>
      <div class="outline">
        <h1>Welcome to <span>my</span> journey</h1>
        <h2>Of mastering Javascript</h2>

        <p v-if="props.homepage">{{ props.homepage.introHomePage }}</p>

        <AtomsExploreButton/>

        <p class="contact">Contact</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Voeg hier je stijlen toe indien nodig */
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

h2 {
  margin-top: 2rem;
}

p {
  margin-top: 2rem;
  max-width: 90%;
}

span {
  color: var(--yellow, #F0DC55); /* Fallback voor CSS variabelen */
}

.contact {
  margin-top: 5rem;
  text-transform: uppercase;
}
</style>
