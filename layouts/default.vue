<script setup>
  const showHideSpinner = ref(true);
  
  onBeforeMount(() => {
    showHideSpinner.value = true;
  })
  onMounted(() => {
    setTimeout(() => showHideSpinner.value = false, 3000);
  })
</script>
<template>
  <div>
    <LoaderLogo v-if="showHideSpinner" />
    <HeaderLogo v-cloak />
    <SettingsThemeSwitcher v-cloak />
    <slot v-cloak />
    <NavigationBottomBar v-cloak />
  </div>
</template>
<style scoped>
  [v-cloak] {
    display: none
  }
</style>