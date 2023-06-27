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
    border-radius: var(--rounded);
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
    border-radius: var(--rounded);
    font-family: 'Source Serif Pro', serif;
    font-weight: 900;
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
  .router-link-active currentSvg {
    fill: var(--primary-color);
    text-shadow: var(--shadow);
  }
  @media (min-width : 1200px) {
    nav {
      right: 10vw;
      left: 10vw;
    }
    nav a i {
      font-size: 3rem;
    }
    nav a h5 {
      font-size: 1rem;
    }
  }
  @media (min-width : 1600px) {
    nav {
      right: 20vw;
      left: 20vw;
    }
  }
</style>