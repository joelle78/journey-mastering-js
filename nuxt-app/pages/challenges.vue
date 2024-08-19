<script setup>

const { challenges, pending, error } = await useChallenges();
</script>

<template>
  <div>
    <Pages-ComponentsChallengeOne :challenges="challenges"/>
    <Pages-ComponentsChallengeTwo :challenges="challenges"/>
    <Pages-ComponentsChallengeThree :challenges="challenges"/>
    <Pages-ComponentsChallengeFour :challenges="challenges"/>
    <Pages-ComponentsChallengeFive :challenges="challenges"/>

  </div>
</template>

<style>

</style>