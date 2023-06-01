<script setup>
  const props = defineProps({
    certificationBackgrounds: Object
  })
</script>
<template>
  <div class="parentContainer">
    <div v-for="certificationBackground in certificationBackgrounds" :key="certificationBackground.id" class="container">
      <img :src="certificationBackground.source" alt="certificationBackground.title" loading="lazy"/>
      <h5 class="year">{{ certificationBackground.date }}</h5>
      <br />
      <br />
      <p>{{ certificationBackground.title }}</p>
      <br />
      <a v-if="certificationBackground.link" :href="certificationBackground.link" target="_blank">{{ certificationBackground.link }}</a>
      <br />
    </div>
  </div>
</template>
<style scoped>
  .parentContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .container {
    position: relative;
    overflow: none;
    padding: 1vh 2vw;
    outline: 2px solid var(--secondary-color);
    border-radius: var(--rounded);
    text-align: center;
  }
  .year {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border-bottom-left-radius: var(--rounded);
    border-top-right-radius: var(--rounded);
    padding: 1vh 2vh;
    font-weight: bold;
  }
  img {
    width: 100%;
    border-radius: var(--rounded);
  }
  p {
    display: block;
    text-align: center;
  }
  a {
    display: block;
    text-align: center;
    text-decoration: underline;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width : 1200px) {
    .parentContainer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 5vh 2vw;
    }
    .container {
      width: 40%;
    }
    h5 {
      font-size: 1rem;
    }
    p {
      font-size: 2rem;
    }
    a {
      font-size: 1rem;
    }
  }
</style>