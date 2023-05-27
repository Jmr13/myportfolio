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
            course: 'ICT major in Animation and Illustration', 
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
        ],
        experienceBackgrounds: [
          { 
            id: 1, 
            role: 'Web Developer' , 
            company: 'Oikos Technologies' ,
            description: [
              'Building the frontend structure using Laravel framework',
              'Generating documentation that outlines the recent updates in frontend development',
              'Carrying out thorough testing and troubleshooting to guarantee the website operates smoothly and efficiently',
              'Integrating front-end elements with back-end web services and APIs'
            ]
          }
        ]
      }
    }
  }
</script>
<template>
  <div>
    <SettingsThemeSwitcher />
    <HeaderTitle title="Education" />
    <BackgroundEducationDetails v-for="eduBackground in eduBackgrounds" :key="eduBackground.id" :eduBackground="eduBackground" />
    <HeaderTitle title="Experience" />
    <BackgroundExperienceDetails v-for="experienceBackground in experienceBackgrounds" :key="experienceBackground.id" :experienceBackground="experienceBackground"/>
    <HeaderTitle title="Certificates" />
    <NavigationBottomBar />
  </div>
</template>