<script setup>
const { homepage, pending, error } = await useHomepage();

useHead({
  title: 'Introductie page',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
});
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