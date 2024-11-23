<script setup>
  const props = defineProps({
    eduBackground: Object
  })
</script>
<template>
   <div class="parentContainer">
      <div class="header">
        <h1 class="year">{{ eduBackground.year }}</h1>
        <h3 class="level">{{ eduBackground.level }}</h3>
        <br />
      </div>
      <h3>
        <pre>  ・{{ eduBackground.school }}・</pre>
      </h3>
      <br />
      <h3 v-if="eduBackground.course">
        <pre>     {{ eduBackground.course }}</pre>
      </h3>
      <br />
      <hr />
   </div>
</template>
<style scoped>
  .parentContainer {
    color: var(--secondary-color);
    margin: 2vh 0;
  }
  hr {
    height: 0.25vh;
    margin: 2vh 0;
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
  }
  .year {
    flex-grow: 1;
  }
  .level {
    padding: 1vh 2vw;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    text-shadow: var(--shadow);
  }
  @media (min-width : 768px) {
    hr {
      height: 2vh;
      margin: 6vh 0;
    }
  }
  @media (min-width : 1200px) {
    hr {
      height: 3vh;
      margin: 6vh 0;
    }
  }
  @media (min-width : 1600px) {
    hr {
      height: 4vh;
      margin: 6vh 0;
    }
  }
</style>