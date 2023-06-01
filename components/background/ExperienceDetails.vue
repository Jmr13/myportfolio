<script setup>
  const props = defineProps({
    experienceBackground: Object
  })
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
          <p v-for="description in experienceBackground.description">
            ・{{ description }}
          </p>
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
  p {
    margin-top: 2vh;
  }
  @media (min-width : 1200px) {
    .circle {
      width: 60px;
      height: 60px;
      margin-right: 40px;
      border-radius: 50px;
    }
    .line {
      width: 16px;
      margin: 0 24px;
      transform: scaleY(1.25);
    }
    h2 {
      font-size: 4rem;
    }
    a , p{
      font-size: 2rem;
    }
  }
  @media (min-width : 1600px) {
    .circle {
      width: 80px;
      height: 80px;
      margin-right: 80px;
      border-radius: 100px;
    }
    .line {
      width: 32px;
      margin: 0 48px;
      transform: scaleY(1.25);
    }
    h2 {
      font-size: 5rem;
    }
    a , h5{
      font-size: 2.5rem;
    }
  }
</style>