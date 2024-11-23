<script setup>
  const props = defineProps({
    certificationBackgrounds: Object
  })
</script>
<template>
  <div class="parentContainer">
    <div v-for="certificationBackground in certificationBackgrounds" :key="certificationBackground.id" class="container">
      <img :src="certificationBackground.source" alt="certificationBackground.title" loading="lazy" />
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
    overflow: none;
  }
  .container {
    position: relative;
    padding: 1vh 2vw;
    outline: 2px solid var(--secondary-color);
    text-align: center;
    margin: 1vh 2vw;
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
  @media (min-width : 768px) {
    h5 {
      font-size: 2rem;
    }
    p, a {
      font-size: 1.5rem;
    }
  }
  @media (min-width : 1200px) {
    .container {
      width: 70%;
    }
    h5 {
      font-size: 2.5rem;
    }
    p, a {
      font-size: 2rem;
    }
  }
  @media (min-width : 1600px) {
    .container {
      width: 60%;
    }
  }
</style>