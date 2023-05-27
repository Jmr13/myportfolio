<script>
  export default {
    data() {
      return {
        eduBackgrounds: [
          { 
            id: 1, 
            school: 'University Of Caloocan City' , 
            level: 'College' ,
            course: 'Bachelor of Science in Computer Science', 
            year: '2019-2023'
          },
          { 
            id: 2, 
            school: 'Bagong Barrio Senior High School' , 
            level: 'Senior HS' ,
            course: 'ICT major in Animation and Illustration+', 
            year: '2017-2019'
          },
          { 
            id: 3, 
            school: 'Bagong Barrio National High School' , 
            level: 'Junior HS' ,
            course: '', 
            year: '2013-2017'
          },
          { 
            id: 4, 
            school: 'Bagong Barrio Elementary School' , 
            level: 'Primary' ,
            course: '', 
            year: '2007-2013'
          }
        ]
      }
    }
  }
</script>
<template>
  <div>
    <SettingsThemeSwitcher />
    <div class="title">
      <h1>Education</h1>
    </div>
    <EducationTimelineDetails v-for="eduBackground in eduBackgrounds" :key="eduBackground.id" :eduBackground="eduBackground" />
    <div class="title">
      <h1>Experiences</h1>
    </div>
    <NavigationBottomBar />
  </div>
</template>
<style scoped>
  h1 {
    color: var(--secondary-color);
    background-color: var(--primary-color);
    padding-right: 4vw;
  }
  .title {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    background-color: var(--secondary-color);
    margin-bottom: 10vw;
  }
</style>