<script>
  export default {
    props: ["project"]
  }
</script>
<template>
  <div>
    <h1>・Toka・</h1>
    <p>A Simple PWA To-do list App</p>
    <br />
    <div class="carousel">
  		<div class="carousel_slides">
  			<div v-for="(image , index) in project.images" :id=" 'carousel_slides_' + index ">
  				<img :src="image" alt="image" />
  			</div>
  		</div>
  	</div>
  	<div v-if="$device.isDesktop" class="carousel_slider">
			<a v-for="(image , index) in project.images" :href=" '#carousel_slides_' + index " />
		</div>
  </div>
</template>
<style scoped>
	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.carousel_slides {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		width: 100%;
		scrollbar-width: none;
		gap: 0 5vw;
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
	h1 , p {
	  width: 100%;
	  text-align: center;
	}
</style>