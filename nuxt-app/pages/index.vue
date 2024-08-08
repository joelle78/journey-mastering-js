<script setup>


const { homepage, pending, error } = await useHomepage();
</script>

<template>
  <div>
    <PagesHomePage :homepage="homepage" />
  </div>
</template>


<style scoped>

</style>


