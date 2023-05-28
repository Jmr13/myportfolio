<script>
  export default {
    data() {
      return {
        thesis_capstones: [
          { 
            id: 1, 
            name: 'E-Dikta' , 
            description: 'A capstone project for the university degree. It converts recognized texts into speech output. E-Dikta is an application that helps the visually impaired with reading printed texts. Uses OpenCV for the Edge detection algorithm and Google ML Kit for Text recognition' ,
            link: '',
            images: [
              '/projects/e-dikta/1.png',
              '/projects/e-dikta/2.png',
              '/projects/e-dikta/3.png',
              '/projects/e-dikta/4.png',
              '/projects/e-dikta/5.png',
              '/projects/e-dikta/6.png'
            ], 
          },
        ],
        personalprojects: [
          { 
            id: 1, 
            name: 'Toka' , 
            description: 'A Simple PWA To-do list App. This is the PWA demonstrated in our seminar' ,
            link: 'https://toka-mobile.netlify.app/',
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
    <HeaderTitle title="thesis/capstone" />
    <ProjectsImageCarousel v-for="project in thesis_capstones" :key="project.id" :project="project" />
    <HeaderTitle title="personal project" />
    <ProjectsImageCarousel v-for="project in personalprojects" :key="project.id" :project="project" />
    <NavigationBottomBar />
  </div>
</template>