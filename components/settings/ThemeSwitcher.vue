<template>
  <div>
    <select v-model="$colorMode.preference">
      <option value="system">System &#9881;</option>
      <option value="light">Light &#9788;</option>
      <option value="dark">Dark &#9789;</option>
      <option value="sepia">Sepia &#167;</option>
      <option value="terminal">Terminal &#9737;</option>
      <option value="aqua">Aqua &#128777;</option>
    </select>
  </div>
</template>
<style scoped>
  div {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2vh
  }
  select {
    all: unset;
    text-align: center;
    padding: 1vh 2vw;
    font-family: 'Source Serif Pro', serif;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-weight: bold;
    text-shadow: var(--shadow);
    cursor: pointer;
  }
</style>