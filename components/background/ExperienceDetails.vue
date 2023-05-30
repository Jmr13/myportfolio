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
          <h2>{{ experienceBackground.role }}</h2>
          <br />
          <a :href="experienceBackground.link">{{ experienceBackground.company }}</a>
          <br />
          <h5 v-for="description in experienceBackground.description">
            ・{{ description }}
          </h5>
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
    border-radius: 25px;
    background-color: var(--secondary-color);
  }
  .line {
    width: 8px;
    margin: 0 12px;
    background-color: var(--secondary-color);
    flex-grow: 1;
    transform: scaleY(1.25);
  }
  a {
    text-decoration-line: underline;
  }
  h5 {
    margin-top: 2vh;
  }
</style>