<script setup>
import {useHead} from "@vueuse/head";

const { challenges, pending, error } = await useChallenges();


useHead({
  title: 'Challenges',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
});
</script>

<template>
  <div>
    <Pages-ComponentsChallengeOne :challenges="challenges"/>
    <Pages-ComponentsChallengeTwo :challenges="challenges"/>
    <Pages-ComponentsChallengeThree :challenges="challenges"/>
    <Pages-ComponentsChallengeFour :challenges="challenges"/>
    <Pages-ComponentsChallengeFive :challenges="challenges"/>
    <Pages-ComponentsChallengeSix :challenges="challenges"/>
  </div>
</template>

<style scoped>

</style>