<script setup>
  const props = defineProps({
    platforms: Object
  })
</script>
<template>
  <div class="parentContainer">
    <a v-for="platform in platforms" :href="platform.link" :key="platform.id" class="container">
      <div>
        <i :class="platform.icon"></i>
      </div>
      <div class="details">
        <h5>{{ platform.title }}</h5>
        <p>{{ platform.details }}</p>
      </div>
    </a>
  </div>
</template>
<style scoped>
  .parentContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    font-size: 2rem;
    margin-right: 2vw;
  }
  .details {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    gap: 1vh 0;
  }
  @media (min-width : 1200px) {
    i {
      font-size: 3rem;
    }
    h5 {
      font-size: 2rem;
    }
    p {
      font-size: 2rem;
    }
  }
</style>