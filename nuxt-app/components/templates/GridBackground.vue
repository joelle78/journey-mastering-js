<script>

</script>

<template>

    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>

    </div>

</template>

<style scoped>
.parent {
  margin: 1rem 1rem 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Maakt drie kolommen */
  grid-template-rows: 1fr;
  position: relative;
  z-index: 0;
  border: 2px solid #000; /* Buitenste lijnen van de grid in zwart */
}

.child {
  height: 95vh;
  border-right: 1px solid var(--grey); /* Binnenste lijnen van de grid in grijs */
}


/* Verwijder de rechter rand voor de laatste kolom */
.child:nth-child(3n) {
  border-right: none;
}


</style>