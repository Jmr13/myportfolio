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
    <!--<LoaderLogo v-if="showHideSpinner" />-->
    <HeaderLogo />
    <SettingsThemeSwitcher />
    <slot />
    <NavigationBottomBar />
  </div>
</template>