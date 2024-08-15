<script setup>
const { homepage, pending, error } = await useHomepage();

</script>

<template>
  <div>
    <Pages-ComponentsHomePage :homepage="homepage" />
  </div>
</template>


<style scoped>

</style>


