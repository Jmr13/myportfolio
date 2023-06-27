<script setup>
  const props = defineProps({
    project: Object
  })
</script>
<template>
  <div class="container">
    <h1>・{{ project.name }}・</h1>
    <p>{{ project.description }}</p>
    <br />
    <a v-if="project.link"  :href="project.link" target="_blank" class="link">{{ project.link }}</a>
    <br />
    <div class="carousel">
  		<div class="carousel_slides">
  			<div v-for="(image , index) in project.images" :id=" 'carousel_slides_' + project.name + index ">
  				<img :src="image" alt="image" />
  			</div>
  		</div>
  	</div>
  	<div v-if="$device.isDesktop" class="carousel_slider">
			<a v-for="(image , index) in project.images" :href=" '#carousel_slides_' + project.name + index " />
		</div>
  </div>
</template>
<style scoped>
  .container {
    margin-top: 2vh;
  }
	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: 1vh 2vw;
	}
	.carousel_slides {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		width: 100%;
		scrollbar-width: none;
		gap: 0 5vw;
		border: 2px solid var(--secondary-color);
		border-radius: var(--rounded);
	}
	.carousel_slides::-webkit-scrollbar {
		display: none;
	}
	.carousel_slides > div {
		scroll-snap-align: center;
		flex-shrink: 0;
		width: 90%;
		height: auto;
		transform-origin: center center;
		transform: scale(1);
		transition: transform 0.5s;
	}
	.carousel_slides > div > img {
		width: 100%;
		box-shadow: var(--shadow);
	}
	.carousel_slider {
		display: flex;
		justify-content: center;
		gap: 0 2vw;
		margin-top: 2vh;
	}
	.carousel_slider > a {
		padding: 0.25rem;
		border: 2px solid var(--secondary-color);
		z-index: 10;
		border-radius: 50%;
	}
	.carousel_slider > a:hover {
		background-color: var(--secondary-color);
	}
	h1 , p{
	  display: block;
	  text-align: center;
	}
	.link {
	  display: block;
	  text-align: center;
	  text-decoration: underline;
	}
  @media (min-width : 1200px) {
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1rem;
    }
    a {
      font-size: 1rem;
    }
    .carousel_slides {
      width: 60%;
    }
    .carousel_slides > div {
      width: 85%;
    }
    .carousel_slider > a {
      padding: 1rem;
    }
	}
</style>