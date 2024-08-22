<script setup lang="ts">

</script>

<template>
<div>
  <a href="/introduction">Home</a>
</div>
</template>

<style scoped>
a {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 90vw;
  font-family: "Jost", sans-serif;
  text-transform: uppercase;
  margin-top: 1rem;
  text-decoration: none;
  color: black;
  z-index: 99999;
}

@media (min-width: 36rem) {
  a {
    width: 95vw;
  }
}
</style>