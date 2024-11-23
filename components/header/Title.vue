<script setup>
  const props = defineProps({
    title: String
  })
</script>
<template>
  <div class="title">
    <h1>{{ title }}</h1>
  </div>
</template>
<style scoped>
  .title h1 {
    color: var(--secondary-color);
    background-color: var(--primary-color);
    padding-right: 4vw;
  }
  .title {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    background-color: var(--secondary-color);
    margin: 10vw 0;
  }
</style>