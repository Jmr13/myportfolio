<script setup>
  const props = defineProps({
    platforms: Object
  })
</script>
<template>
  <div>
    <div v-for="platform in platforms" :key="platform.id" class="container">
      <div>
        <i :class="platform.icon"></i>
      </div>
      <div class="details">
        <h4>{{ platform.title }}</h4>
        <p>{{ platform.details }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 2vh 2vw;
  }
  .container {
    display: flex;
    align-items: center;
    border: 2px solid var(--secondary-color);
    padding: 1vh 2vw;
    border-radius: var(--rounded);
  }
  i {
    font-size: 3rem;
  }
  .details {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
  }
</style>