<script setup>


const { homepage, pending, error } = await useHomepage();

</script>

<template>
  <div>
    <Pages-ComponentsIntroPage :homepage="homepage" />
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error loading content</p>
  </div>
</template>

<style scoped>

</style>