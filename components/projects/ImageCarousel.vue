<script setup>
  const props = defineProps({
    project: Object
  })
</script>
<template>
  <div class="container">
    <h1>・{{ project.name }}・</h1>
    <div class="techstack">
      <p v-for="tech in project.techs">
        {{ tech }}
      </p>
    </div>
    <p>{{ project.description }}</p>
    <br />
	<div class="link">
		<a v-if="project.link"  :href="project.link" target="_blank" class="link">{{ project.linkname }}</a>
	</div>
    <br />
	<swiper
	  v-if="project.images"
		:slidesPerView="1"
		:breakpoints="{
		'768': {
			slidesPerView: 2,	
			spaceBetween: 20,
		},
		'1200': {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		'1600': {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		}"
	>
		<swiper-slide v-for="image in project.images">
			<img :src="image" alt="Screenshots" />
		</swiper-slide>
	</swiper>
	<iframe v-if="!project.images" :src="project.link" :title="project.name">
  </iframe>
  </div>
</template>
<style scoped>
	.container {
		margin-bottom: 5vh;
	}
	h1, p {
		text-align: center;
	}
	.link {
		display: flex;
		justify-content: center;
	}
	a {
		cursor: pointer;
		text-decoration: underline;
	}
	.swiper-slide {
		display: flex;
		justify-content: center;
		height: 500px;
		object-fit: contain;
		background-color: var(--secondary-color);
	}
	img {
		border: 1px solid var(--secondary-color);
		padding: 1vh;
	}
	.techstack {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  flex-wrap: wrap;
	  gap: 1vh 4vw;
	  margin: 2vh 0;
	}
	.techstack p {
	  background-color: var(--secondary-color);
	  color: var(--primary-color);
    padding: 1vh 3vw;
    font-weight: bold;
	}
	iframe {
	  height: 80vh;
	  width: 100%;
	}
	@media (min-width : 768px) {
		h1 {
			font-size: 3rem;
		}
		p {
			font-size: 1.5rem;
		}
		a {
			font-size: 1rem;
		}
	}
	@media (min-width : 1200px) {
		h1 {
			font-size: 3.5rem;
		}
		h2 {
			font-size: 2rem;
		}
		h3 {
			font-size: 1.5rem;
		}
	}
	@media (min-width : 1600px) {
		h1 {
			font-size: 4rem;
		}
		h2 {
			font-size: 2.5rem;
		}
		h3 {
			font-size: 2rem;
		}
	}
</style>