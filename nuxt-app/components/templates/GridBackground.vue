<script>

</script>

<template>

    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
      <div class="child-5"></div>
    </div>

</template>

<style scoped>
.parent {
  margin: 1rem 1rem 1rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  position: relative;
  z-index: 0;
  border: 2px solid #000;
}

.child {
  height: 95vh;
  border-right: 1px solid var(--grey);
}


.child:nth-child(3n) {
  border-right: none;
}


.child:nth-child(4n),
.child:nth-child(5n) {
  display: none;
}


@media (min-width: 36rem) {
  .parent {
    grid-template-columns: repeat(4, 1fr);
  }


  .parent .child {
    border-right: 1px solid var(--grey);
  }


  .parent .child:nth-child(4n) {
    border-right: none;
  }
}

@media (min-width: 64rem) {
  .parent {
    grid-template-columns: repeat(5, 1fr);
  }

  .parent .child-5 {
    border-right: 1px solid var(--grey);
  }

  .parent .child:nth-child(5n) {
    border-right: none;
  }
}


</style>