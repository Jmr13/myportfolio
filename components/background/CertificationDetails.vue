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
      <hr />
      <p>{{ certificationBackground.title }}</p>
      <hr />
      <a v-if="certificationBackground.link" :href="certificationBackground.link" target="_blank">{{ certificationBackground.link }}</a>
      <hr />
    </div>
  </div>
</template>

<style scoped>
  .parentContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: none;
    width: 100%;
  }

  .container {
    position: relative;
    padding: 2vh 3vw;
    outline: 2px solid var(--secondary-color);
    text-align: center;
    margin: 2vh 3vw;
    width: 100%; /* Default to full width */
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
    font-size: 1.5rem;
  }

  img {
    width: 100%;
    height: auto;
  }

  hr {
    border: 0;
    border-top: 1px solid var(--secondary-color);
    margin: 1.5vh 0;
    width: 100%;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  a {
    font-size: 1rem;
    color: var(--primary-color);
    text-decoration: none;
  }

  /* Styles for 768px and smaller viewports */
  @media (max-width: 768px) {
    .container {
      width: 100%; /* Full width on small screens */
      padding: 2vh 3vw;
    }

    .year {
      font-size: 1.2rem;
    }

    p, a {
      font-size: 1rem;
    }

    hr {
      margin: 1vh 0;
    }
  }

  /* Styles for 1200px and larger viewports */
  @media (min-width: 1200px) {
    .container {
      width: 70%; /* 70% width on screens wider than 1200px */
      padding: 2vh 3vw;
    }

    .year {
      font-size: 1.5rem;
    }

    p, a {
      font-size: 1.2rem;
    }

    hr {
      margin: 1.5vh 0;
    }
  }

  /* Styles for 1600px and larger viewports */
  @media (min-width: 1600px) {
    .container {
      width: 60%; /* 60% width on screens wider than 1600px */
      padding: 2vh 3vw;
    }

    .year {
      font-size: 1.7rem;
    }

    p, a {
      font-size: 1.3rem;
    }

    hr {
      margin: 2vh 0;
    }
  }
</style>
