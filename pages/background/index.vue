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
            link: '/background/JamoviStatisticalTool.jpg'
          },
          { 
            id: 2, 
            title: 'The future of NFC: Emerging trends and Possibilities' , 
            date: 'April 2023' ,
            link: '/background/FutureOfNFC.jpg'
          },
          { 
            id: 3, 
            title: 'Design patterns using Java technology' , 
            date: 'April 2023' ,
            link: '/background/DesignPatterns.jpg'
          },
          { 
            id: 4, 
            title: 'AI 101: Introduction to Artificial Intelligence' , 
            date: 'April 2023' ,
            link: '/background/IntroToAI.png'
          },
          { 
            id: 5, 
            title: 'Protecting your digital fortresses: The essentials of Cybersecurity' , 
            date: 'April 2023' ,
            link: '/background/ProtectingYourDigitalFortresses.jpg'
          },
          { 
            id: 6, 
            title: 'Smart home Automation using IoT and Android technology' , 
            date: 'March 2023' ,
            link: '/background/SmartHomeAutomation.png'
          },
          {
            id: 7, 
            title: 'Introduction to Internet of Things' ,
            date: 'March 2023' ,
            link: '/background/IntroToIoT.png'
          },
          { 
            id: 8, 
            title: 'Blockchain 101 Webinar' , 
            date: 'January 2023' ,
            link: '/background/Blockchain101.png'
          },
          { 
            id: 9, 
            title: 'Web 3.0 101 Webinar' , 
            date: 'January 2023' ,
            link: '/background/Web3.0101.png'
          },
          { 
            id: 10, 
            title: 'Community Ignite Series Episode #66: Intro to analytics on AWS' , 
            date: 'November 2022' ,
            link: '/background/IntroToAnalytics.png'
          },
          { 
            id: 11, 
            title: 'Community Ignite Series Episode #67: Introduction to big data and analytics' , 
            date: 'November 2022' ,
            link: '/background/BigDataAndAnalytics.png'
          },
          { 
            id: 12, 
            title: 'Best practices for wordpress site in AWS' , 
            date: 'November 2022' ,
            link: '/background/BestPracticesForWordpressSitesInAws.jpg'
          },
          { 
            id: 13, 
            title: 'Firebase: Multi-platform system integration using Cloud database' , 
            date: 'April 2022' ,
            link: '/background/Firebase.png'
          },
          { 
            id: 14, 
            title: 'PHP MVC Framework Laravel: Developing Serverside Websites' , 
            date: 'April 2022' ,
            link: '/background/Laravel.png'
          },
          { 
            id: 15, 
            title: 'Web Development Series: ABC is for kids, SQL is for YOU' , 
            date: 'October 2020' ,
            link: '/background/ABCIsForKids.png'
          },
          { 
            id: 16, 
            title: 'Web Development Series: Git Ready with Version Control' , 
            date: 'October 2020' ,
            link: '/background/GitReadyWithVC.png'
          },
        ],
        awardsBackgrounds: [
          { 
            id: 1, 
            title: 'Top 15 Finalist from the recent Appcon 2022' , 
            date: 'April 2023' ,
            link: '/background/Otis.jpg'
          },
          { 
            id: 2, 
            title: 'First place in DOST R&D Conference: Scientific Poster Competition' , 
            date: 'December 2022' ,
            link: '/background/DOST.png'
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
    <HeaderTitle title="awards" />
    <BackgroundCertificationDetails v-for="award in awardsBackgrounds" :key="award.id" :certificationBackground="award"/>
    <HeaderTitle title="webinars/seminars" />
    <BackgroundCertificationDetails v-for="certificationBackground in certificationBackgrounds" :key="certificationBackground.id" :certificationBackground="certificationBackground"/>
    <NavigationBottomBar />
  </div>
</template>