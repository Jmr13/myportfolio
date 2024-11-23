<script setup>
  const showHideSpinner = ref(true);
  
  onBeforeMount(() => {
    showHideSpinner.value = true;
  })
  onMounted(() => {
    setTimeout(() => showHideSpinner.value = false, 0);
  })
</script>
<template>
  <div>
    <LoaderLogo v-show="showHideSpinner" />
    <HeaderLogo v-show="!showHideSpinner" />
    <SettingsThemeSwitcher v-show="!showHideSpinner" />
    <slot v-if="!showHideSpinner" />
    <NavigationBottomBar v-show="!showHideSpinner" />
  </div>
</template>