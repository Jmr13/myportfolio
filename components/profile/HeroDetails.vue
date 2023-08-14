<template>
  <div>
    <img src="/index/ProfilePic.png" alt="Profile" />
    <br />
    <br />
    <h1>
      i am jomar gamayan
    </h1>
    <br />
    <h2>
      ・designer/coder・
    </h2>
    <br />
    <p>
      I am a passionate developer with a strong foundation in design. Having a tremendous curiosity drives me to learn and explore things
    </p>
  </div>
</template>
<style scoped>
  div {
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: none;
    color: var(--secondary-color);
    filter: blur(0.25px);
  }
  div h1 {
    font-size: 2rem;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    padding: 1vh 0;
    text-shadow: var(--shadow);
  }
  img {
    width: 100%;
    outline: 2px solid 	var(--secondary-color);
  }
  @media (min-width : 768px) {
    div h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    img {
      width: 50%;
    }
  }
  @media (min-width : 1200px) {
    div h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
    }
    img {
      width: 40%;
    }
  }
  @media (min-width : 1600px) {
    div h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 4rem;
    }
    p {
      font-size: 3rem;
    }
    img {
      width: 30%;
    }
  }
</style>