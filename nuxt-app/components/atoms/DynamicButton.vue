<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: false,
    default: '#',
  },
  ariaLabel: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<template>
  <a :href="href" :aria-label="ariaLabel || `Go to ${label.toLowerCase()}`">
    <button role="button">{{ label }}</button>
  </a>
</template>

<style scoped>
button {
  font-family: "Jost", sans-serif;
  text-transform: uppercase;
  background-color: transparent;
  width: 5rem;
  border: 2px solid black;
  cursor: pointer;

  -webkit-appearance: none; /* WebKit-browsers */
  -moz-appearance: none;    /* Firefox */
  appearance: none;         /* Overige browsers */

  box-shadow: none;
  outline: none;
}
</style>
