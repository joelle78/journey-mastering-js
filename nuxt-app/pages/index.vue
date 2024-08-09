<script setup>




import Challenges from "~/pages/challenges.vue";

const { homepage, pending, error } = await useHomepage();
</script>

<template>
  <div>
    <Pages-ComponentsHomePage :homepage="homepage" />
<!--    <challenges/>-->
  </div>
</template>


<style scoped>

</style>


