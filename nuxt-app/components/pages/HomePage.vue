<script setup lang="ts">


</script>

<template>
  <div>
    <TemplatesGridBackground/>

    <main>
      <div class="outline">
        <h1>Welcome to <span>my</span> journey</h1>
        <h2>Of mastering Javascript</h2>
        <p>Als student Front-end Development leer ik JavaScript, een sleuteltool voor interactieve websites. Mijn
          motivatie is om creatieve en gebruiksvriendelijke weboplossingen te ontwikkelen. Het beheersen van JavaScript
          is essentieel voor mijn carrière, en ik kijk ernaar uit om mijn vaardigheden verder te verbeteren en toe te
          passen in toekomstige projecten.</p>
        <AtomsExploreButton/>
        <p class="contact">Contact</p>
      </div>
    </main>
  </div>
</template>

<style scoped>

main {
  position: absolute;
  margin-left: 2rem;
  top: 5rem;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1;
  pointer-events: none;
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
  margin-top: 7rem;
  text-transform: uppercase;
}
</style>