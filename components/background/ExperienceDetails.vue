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
    gap: 0 2vw;
  }
  .container div {
    display: flex;
    flex-direction: column;
  }
  .circle {
    width: 30px;
    height: 30px;
    margin: auto;
    border-radius: 25px;
    background-color: var(--secondary-color);
  }
  .circle::before {
    content: '';
    width: 8px;
    height: inherit;
    align-self: center;
    transform: translateY(3vh);
    background-color: var(--secondary-color);
  }
  .line {
    width: 8px;
    margin: auto;
    background-color: var(--secondary-color);
    flex-grow: 1;
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
      border-radius: 50px;
    }
    .circle::before {
      content: '';
      width: 16px;
      transform: translateY(3vh);
    }
    .line {
      width: 16px;
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
      width: 60px;
      height: 60px;
      border-radius: 50px;
    }
    .circle::before {
      content: '';
      width: 16px;
      transform: translateY(2vh);
    }
    .line {
      width: 16px;
    }
    h2 {
      font-size: 5rem;
    }
    a , h5{
      font-size: 2.5rem;
    }
  }
</style>