<script setup lang="ts">

</script>

<template>
<div class="container-home-button" >
  <a href="/introduction">Home</a>
</div>
</template>

<style scoped>

.container-home-button {
  position: relative;
  display: flex;
  width: 90vw;
  justify-content: flex-end;
  align-items: flex-end;
  top: 10vh;
  z-index: 999;

}
a {
  display: flex;
  font-family: "Jost", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
}

@media (min-width: 36rem) {
.container-home-button {
  margin-left: 2rem;
}
}

@media (min-width: 64rem) {
  .container-home-button {
    margin-left: 3.5rem;
  }
}

@media (min-width: 90rem) {
  .container-home-button {
    margin-left: 4.5rem;
  }
}
</style>