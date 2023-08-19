<script setup>
  const showHideSpinner = ref(true);
  
  onBeforeMount(() => {
    showHideSpinner.value = true;
  })
  onMounted(() => {
    showHideSpinner.value = false
    //setTimeout(() => showHideSpinner.value = false, 3000);
  })
</script>
<template>
  <div>
    <!--
    <LoaderLogo v-show="showHideSpinner" />
    -->
    <HeaderLogo v-show="!showHideSpinner" />
    <SettingsThemeSwitcher v-show="!showHideSpinner" />
    <slot v-if="!showHideSpinner" />
    <NavigationBottomBar v-show="!showHideSpinner" />
  </div>
</template>