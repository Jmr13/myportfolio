<script setup>
  const props = defineProps({
    platforms: Object
  })
</script>
<template>
  <div class="parentContainer">
    <a v-for="platform in platforms" :href="platform.link" target="_blank" :key="platform.id" class="container">
      <div>
        <i :class="platform.icon"></i>
      </div>
      <div class="details">
        <h6>{{ platform.title }}</h6>
        <h5>{{ platform.details }}</h5>
      </div>
    </a>
  </div>
</template>
<style scoped>
  .parentContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2vh 2vw;
  }
  .container {
    display: flex;
    align-items: center;
    border: 2px solid var(--secondary-color);
    padding: 1vh 2vw;
    border-radius: var(--rounded);
    cursor: pointer;
  }
  i {
    margin-right: 2vw;
  }
  .details {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    gap: 1vh 0;
    cursor: pointer;
  }
</style>