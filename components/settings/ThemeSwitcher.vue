<script setup>
  const colorMode = useColorMode()
</script>
<template>
  <div>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
<style scoped>
  div {
    display: flex;
    justify-content: end;
    padding: 0 2vw;
  }
  select {
    border-radius: var(--rounded);
    padding: 1vh 2vw;
    font-family: 'Source Serif Pro', serif;
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
</style>