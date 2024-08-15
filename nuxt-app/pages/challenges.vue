<script setup>

const { challenges, pending, error } = await useChallenges();
</script>

<template>
  <div>
    <Pages-ComponentsChallengeOne :challenges="challenges"/>
    <Pages-ComponentsChallengeTwo/>

  </div>
</template>

<style>

</style>