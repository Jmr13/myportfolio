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
          <h1>{{ experienceBackground.role }}</h1>
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
    cursor: pointer;
  }
  p {
    margin-top: 2vh;
  }
  h1 {
      font-size: 2rem;
  }
  @media (min-width : 768px) {
    h1 {
      font-size: 3rem;
    }
    a {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media (min-width : 1200px) {
    .circle {
      width: 60px;
      height: 60px;
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
    h1 {
      font-size: 4rem;
    }
    a {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
    }
    .circle {
      width: 60px;
      height: 60px;
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