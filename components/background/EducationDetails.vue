<script setup>
  const props = defineProps({
    eduBackground: Object
  })
</script>
<template>
   <div>
      <div class="header">
        <h1 class="year">{{ eduBackground.year }}</h1>
        <h5 class="level">{{ eduBackground.level }}</h5>
        <br />
      </div>
      <h4>
        <pre>    ・{{ eduBackground.school }}・</pre>
      </h4>
      <br />
      <h5 v-if="eduBackground.course">
        <pre>        {{ eduBackground.course }}</pre>
      </h5>
      <br />
      <hr />
   </div>
</template>
<style scoped>
  div {
    color: var(--secondary-color);
    margin: 2vh 0;
  }
  hr {
    height: 0.25vh;
    background-color: var(--secondary-color);
    border: none;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .year::before {
    content: '';
    height: 1vh;
    width: 3vw;
    background-color: var(--secondary-color);
    padding-left: 2vw;
    margin-right: 2vw;
    border-radius: var(--rounded);
  }
  .year {
    flex-grow: 1;
  }
  .level {
    padding: 1vh 2vw;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border-radius: var(--rounded);
    text-shadow: var(--shadow);
  }
  @media (min-width : 1200px) {
    hr {
      height: 1vh;
    }
    .year {
      font-size: 4rem;
    }
    .level {
      font-size: 2rem;
    }
    pre {
      font-size: 2rem;
    }
  }
</style>