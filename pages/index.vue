<script setup>
  useHead({
    title: 'Profile',
    meta: [
      { name: 'description', content: 'Profile of Jomar Gamayan' }
    ]
  })
</script>
<template>
  <NuxtLayout>
    <ProfileHeroDetails />
  </NuxtLayout>
</template>
<style>
  :root {
  	--primary-color: white;
  	--secondary-color: #252525;
  	--shadow: -4px 3px 2px rgba(0,0,0,0.3);
  }
  .dark-mode {
  	--primary-color: #252525;
  	--secondary-color: white;
  }
  .sepia-mode {
    --primary-color: #f1e7d0;
  	--secondary-color: #433422;
  }
  .terminal-mode {
    --primary-color: #000000;
  	--secondary-color: #66ff66;
  }
  .aqua-mode {
    --primary-color: #090e2f;
    --secondary-color: #34b5ff;
  }
  ::-moz-selection {
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }
  ::selection {
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }
  * {
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
  }
  *::before {
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
  }
  *::after {
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
  	background-color: var(--primary-color);
  	color: var(--secondary-color);
  	font-family: 'Source Serif Pro', serif;
    font-weight: 400;
    padding: 2vh 5vw 20vh 5vw;
  }
  button, a{
    all: unset;
  }
  hr {
    border: 1px solid white;
    background-color: white;
  }
  @media (min-width : 768px) {
    body {
      padding: 4vh 10vw 20vh 10vw;
    }
  }
  @media (min-width : 1200px) {
    body {
      padding: 4vh 10vw 40vh 10vw;
    }
  }
</style>