<template>
  <div>
    <nav>
      <NuxtLink to="/">
        <i class="ri-user-2-line"></i>
        <h5>・profile・</h5>
      </NuxtLink>
      <NuxtLink to="/background">
        <i class="ri-building-line"></i>
        <h5>・background・</h5>
      </NuxtLink>
      <NuxtLink to="/projects">
        <i class="ri-git-repository-line"></i>
        <h5>・projects・</h5>
      </NuxtLink>
      <NuxtLink to="/contact">
        <i class="ri-contacts-book-line"></i>
        <h5>・contact・</h5>
      </NuxtLink>
    </nav>
  </div>
</template>
<style scoped>
  @import url("~/assets/css/animation.css");
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 2vw 1vh 2vw;
    padding: 1vw 2vw;
    gap: 0 2vw;
    z-index: 10;
    outline: 2px solid 	var(--secondary-color);
    background-color: var(--primary-color);
  }
  nav a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1vh 0;
    width: 20%;
    text-align: center;
    color: var(--secondary-color);
    cursor: pointer;
    background-color: var(--color);
    font-family: 'Source Serif Pro', serif;
    font-weight: 900;
  }
  nav a:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    transition: all 0.5s ease-in-out;
  }
  nav a i {
    font-size: 2rem;
  }
  nav a h5 {
    font-size: 0.75rem;
    white-space: nowrap;
  }
  .router-link-active {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    text-shadow: var(--shadow);
  }
  .router-link-active i {
    animation: pulsate-fwd 0.5s ease-in-out infinite both;
  }
  .router-link-active h5 {
    animation: pulsate-fwd 0.5s ease-in-out infinite both;
  }
  .router-link-active currentSvg {
    fill: var(--primary-color);
    text-shadow: var(--shadow);
  }
  @media (min-width : 768px) {
    nav {
      right: 20vw;
      left: 20vw;
    }
    nav a i {
      font-size: 2rem;
    }
  }
  @media (min-width : 1200px) {
    nav a i {
      font-size: 3rem;
    }
    nav a h5 {
      font-size: 1rem;
    }
  }
  @media (min-width : 1600px) {
    nav a i {
      font-size: 4rem;
    }
  }
</style>