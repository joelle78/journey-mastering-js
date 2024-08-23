<script setup>

import {useHead} from "@vueuse/head";

useHead({
  title: 'Notities',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
});
</script>

<template>
<div>
<PagesComponentsNotesPage/>
</div>
</template>

<style scoped>

</style>