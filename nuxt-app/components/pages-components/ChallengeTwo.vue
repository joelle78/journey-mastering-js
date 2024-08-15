<script setup>


</script>

<template>


  <div class="container">
    <TemplatesGridBackground/>

    <main>
      <div class="flex-container-header">
        <h3>Challenge one <span>drumkit</span></h3>
        <AtomsCodeButton/>
      </div>


    </main>

    <div class="buttons">
      <AtomsButtonPrevious/>
      <AtomsButtonNext/>
    </div>

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
  flex-direction: column;
}

.flex-container-header {
  display: flex;
  flex-direction: row;
}

.buttons {
  padding: 0 3rem 0 3rem;
  position: relative;
  top: -5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
