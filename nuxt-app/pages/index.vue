<script setup>




import Challenges from "~/pages/challenges.vue";

const { homepage, pending, error } = await useHomepage();
</script>

<template>
  <div>
    <PagesHomePage :homepage="homepage" />
<!--    <challenges/>-->
  </div>
</template>


<style scoped>

</style>


