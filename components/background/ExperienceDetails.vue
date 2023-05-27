<script>
  export default {
    props: ["experienceBackground"]
  }
</script>
<template>
    <div>
      <div class="container">
        <div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <div>
          <h3>{{ experienceBackground.role }}</h3>
          <br />
          <h5>{{ experienceBackground.company }}</h5>
          <br />
          <h6 v-for="description in experienceBackground.description">
            ・{{ description }}
          </h6>
        </div>
      </div>
    </div>
</template>
<style scoped>
  div {
    margin-bottom: 2vh;
  }
  .container {
    display: flex;
  }
  .container div {
    display: flex;
    flex-direction: column;
  }
  .circle {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    shape-outside: circle();
    clip-path: circle();
    background-color: var(--secondary-color);
  }
  .line {
    width: 8px;
    margin: 0 12px;
    background-color: var(--secondary-color);
    flex-grow: 1;
    transform: scaleY(1.25);
  }
</style>