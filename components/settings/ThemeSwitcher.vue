<template>
  <div>
    <select v-model="$colorMode.preference">
      <option value="system">System &#9881;</option>
      <option value="light">Light &#9788;</option>
      <option value="dark">Dark &#9789;</option>
    </select>
  </div>
</template>
<style scoped>
  div {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2vh;
  }
  select {
    all: unset;
    text-align: center;
    border-radius: var(--rounded);
    padding: 1vh 2vw;
    font-family: 'Source Serif Pro', serif;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-weight: bold;
  }
</style>