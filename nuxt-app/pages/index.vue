<script setup>

import { useHomepage } from '~/composables/useHomepage';

const { homepage, pending, error } = useHomepage();

useHead({
  title: 'Homepage',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
});
</script>

<template>
  <div>
    <Pages-ComponentsHomePage :homepage="homepage" />
  </div>
</template>


<style scoped>

</style>


