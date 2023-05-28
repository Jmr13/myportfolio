<script>
  export default {
    data() {
      return {
        projects: [
          { 
            id: 1, 
            name: 'University Of Caloocan City' , 
            description: 'College' ,
            images: [
              'https://raw.githubusercontent.com/Jmr13/Toka/main/assets/pwa-assets/screenshots/1.png',
              'https://raw.githubusercontent.com/Jmr13/Toka/main/assets/pwa-assets/screenshots/2.png',
              'https://raw.githubusercontent.com/Jmr13/Toka/main/assets/pwa-assets/screenshots/3.png',
              'https://raw.githubusercontent.com/Jmr13/Toka/main/assets/pwa-assets/screenshots/4.png',
              'https://raw.githubusercontent.com/Jmr13/Toka/main/assets/pwa-assets/screenshots/5.png'
            ], 
          },
        ]
      }
    }
  }
</script>
<template>
  <div>
    <SettingsThemeSwitcher />
    <ProjectsImageCarousel v-for="project in projects" :key="project.id" :project="project" />
    <NavigationBottomBar />
  </div>
</template>