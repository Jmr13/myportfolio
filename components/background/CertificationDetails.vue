<script>
  export default {
    props: ["certificationBackground"]
  }
</script>
<template>
    <div>
      <div class="container">
        <img :src="certificationBackground.link" alt="" />
        <h5 class="year">{{ certificationBackground.date }}</h5>
        <br />
      </div>
      <br />
      <p>{{ certificationBackground.title }}</p>
      <br />
    </div>
</template>
<style scoped>
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
    width: 100%;
    text-align: center;
  }
</style>