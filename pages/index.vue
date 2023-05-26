<template>
  <div>
    <SettingsThemeSwitcher />
    <ProfileHeroDetails />
    <NavigationBottomBar />
  </div>
</template>
<style>
  :root {
  	--primary-color: white;
  	--secondary-color: #252525;
  	--shadow: -4px 3px 2px rgba(0,0,0,0.3);
  	--rounded: 2vw;
  }
  .dark-mode {
  	--primary-color: #252525;
  	--secondary-color: white;
  	--shadow: -4px 3px 2px rgba(192,192,192,0.3);
  }
  ::-moz-selection {
    color: var(--secondary-color);
    background: #1e1302;
  }
  ::selection {
    color: var(--secondary-color);
    background: #1e1302;
  }
  * {
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
    border: 1px solid black;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
  	background-color: var(--primary-color);
  	color: var(--alt-color);
  }
  button, a{
    all: unset;
  }
  hr {
    border: 1px solid white;
    background-color: white;
  }
</style>