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
              'Building the frontend architecture using Laravel framework',
              'Generating documentation that outlines the recent updates in frontend development',
              'Carrying out thorough testing and troubleshooting to guarantee the website operates smoothly and efficiently',
              'Integrating front-end elements with back-end web services and APIs'
            ]
          }
        ],
        certificationBackgrounds: [
          { 
            id: 1, 
            title: 'Data mining through Jamovi statistical tool' , 
            date: 'May 2023' ,
            link: 'https://drive.google.com/uc?export=view&id=1B2h96ecaRfV3F86MOXDrbnRu5BbOhuRP'
          },
          { 
            id: 2, 
            title: 'The future of NFC: Emerging trends and Possibilities' , 
            date: 'April 2023' ,
            link: 'https://drive.google.com/uc?export=view&id=15LFCWD-grJk8TzvtYeibV3aEfzwaW-lM'
          },
          { 
            id: 3, 
            title: 'Design patterns using Java technology' , 
            date: 'April 2023' ,
            link: 'https://drive.google.com/uc?export=view&id=181rcRJAmx7tuGhSm9rTieyljAsP5XhF-'
          },
          { 
            id: 4, 
            title: 'AI 101: Introduction to Artificial Intelligence' , 
            date: 'April 2023' ,
            link: 'https://drive.google.com/uc?export=view&id=1KWDeAOamqGUhvjngSokXAF1R5BsURFpa'
          },
          { 
            id: 5, 
            title: 'Protecting your digital fortresses: The essentials of Cybersecurity' , 
            date: 'April 2023' ,
            link: 'https://drive.google.com/uc?export=view&id=1Kw3o0JOUfSGFIWEvJERr2PZ8y5zQ5guo'
          },
          { 
            id: 6, 
            title: 'Smart home Automation using IoT and Android technology' , 
            date: 'March 2023' ,
            link: 'https://drive.google.com/uc?export=view&id=19pfRBgIdrXfXT_QsS3XXIdK8rHdytjxE'
          },
          {
            id: 7, 
            title: 'Introduction to Internet of Things' ,
            date: 'March 2023' ,
            link: 'https://drive.google.com/uc?export=view&id=17XIxiOaItiX9_fCdSS_23lFTu2vwUy3B'
          },
          { 
            id: 8, 
            title: 'Blockchain 101 Webinar' , 
            date: 'January 2023' ,
            link: 'https://drive.google.com/uc?export=view&id=17gs-_8zeBZl2w_xV2HLH-zU2G3oZgJ5y'
          },
          { 
            id: 9, 
            title: 'Web 3.0 101 Webinar' , 
            date: 'January 2023' ,
            link: 'https://drive.google.com/uc?export=view&id=16wHbBQ7si54p6zruXKGsU5V2oz9SfIem'
          },
          { 
            id: 10, 
            title: 'Community Ignite Series Episode #66: Intro to analytics on AWS' , 
            date: 'November 2022' ,
            link: 'https://drive.google.com/uc?export=view&id=12DT0J7j1IM36gLHw0R_ru3dxr9ox7pxU'
          },
          { 
            id: 11, 
            title: 'Community Ignite Series Episode #67: Introduction to big data and analytics' , 
            date: 'November 2022' ,
            link: 'https://drive.google.com/uc?export=view&id=12A_cSvV6_JomPNAkZaWAjSf_mZn5ljL0'
          },
          { 
            id: 12, 
            title: 'Best practices for wordpress site in AWS' , 
            date: 'November 2022' ,
            link: 'https://drive.google.com/uc?export=view&id=1DtaUXSmYMMgUVQLjUOO1rFVuCwMJ6wXm'
          },
          { 
            id: 13, 
            title: 'Firebase: Multi-platform system integration using Cloud database' , 
            date: 'April 2022' ,
            link: 'https://drive.google.com/uc?export=view&id=17-mNioRko2fMcLZwQntXEBc92dZZ-yts'
          },
          { 
            id: 14, 
            title: 'PHP MVC Framework Laravel: Developing Serverside Websites' , 
            date: 'April 2022' ,
            link: 'https://drive.google.com/uc?export=view&id=17hEXXzZsWasR4WlskW3x84tGeiV5cfL5'
          },
          { 
            id: 15, 
            title: 'Web Development Series: ABC is for kids, SQL is for YOU' , 
            date: 'October 2020' ,
            link: 'https://drive.google.com/uc?export=view&id=16zfOMNpdp26gjGlfEmS2AIyxBzQVo_97'
          },
          { 
            id: 16, 
            title: 'Web Development Series: Git Ready with Version Control' , 
            date: 'October 2020' ,
            link: 'https://drive.google.com/uc?export=view&id=17gF_NjIzpNmK5anaJ6vyGjclKCaHyx_F'
          },
        ]
      }
    }
  }
</script>
<template>
  <div>
    <SettingsThemeSwitcher />
    <HeaderTitle title="education" />
    <BackgroundEducationDetails v-for="eduBackground in eduBackgrounds" :key="eduBackground.id" :eduBackground="eduBackground" />
    <HeaderTitle title="experience" />
    <BackgroundExperienceDetails v-for="experienceBackground in experienceBackgrounds" :key="experienceBackground.id" :experienceBackground="experienceBackground"/>
    <HeaderTitle title="certificates" />
    <BackgroundCertificationDetails v-for="certificationBackground in certificationBackgrounds" :key="certificationBackground.id" :certificationBackground="certificationBackground"/>
    <NavigationBottomBar />
  </div>
</template>