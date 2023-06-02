<script setup>
  useHead({
    title: 'Background',
    meta: [
      { name: 'description', content: 'Background details about Jomar Gamayan' }
    ]
  })
  
  const eduBackgrounds = [
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
  ]
  
  const experienceBackgrounds = [
    { 
      id: 1, 
      role: 'Web Developer(Internship)' , 
      company: 'Oikos Technologies' ,
      description: [
        'Building the frontend architecture using Laravel framework',
        'Generating documentation that outlines the recent updates in frontend development',
        'Carrying out thorough testing and troubleshooting to guarantee the website operates smoothly and efficiently',
        'Integrating front-end elements with back-end web services and APIs'
      ],
      link: 'https://www.facebook.com/OikosTechnologies'
    }
  ]
  
  const webinarSeminarBackgrounds = [
    { 
      id: 1, 
      title: 'Data mining through Jamovi statistical tool' , 
      date: 'May 2023' ,
      source: '/background/JamoviStatisticalTool.webp' ,
      link: ''
    },
    { 
      id: 2, 
      title: 'The future of NFC: Emerging trends and Possibilities' , 
      date: 'April 2023' ,
      source: '/background/FutureOfNFC.webp' ,
      link: ''
    },
    { 
      id: 3, 
      title: 'Design patterns using Java technology' , 
      date: 'April 2023' ,
      source: '/background/DesignPatterns.webp' ,
      link: ''
    },
    { 
      id: 4, 
      title: 'AI 101: Introduction to Artificial Intelligence' , 
      date: 'April 2023' ,
      source: '/background/IntroToAI.webp' ,
      link: ''
    },
    { 
      id: 5, 
      title: 'Protecting your digital fortresses: The essentials of Cybersecurity' , 
      date: 'April 2023' ,
      source: '/background/ProtectingYourDigitalFortresses.webp' , 
      link: ''
    },
    { 
      id: 6, 
      title: 'Smart home Automation using IoT and Android technology' , 
      date: 'March 2023' ,
      source: '/background/SmartHomeAutomation.webp' ,
      link: ''
    },
    {
      id: 7, 
      title: 'Introduction to Internet of Things' ,
      date: 'March 2023' ,
      source: '/background/IntroToIoT.webp' ,
      link: ''
    },
    { 
      id: 8, 
      title: 'Blockchain 101 Webinar' , 
      date: 'January 2023' ,
      source: '/background/Blockchain101.webp' ,
      link: ''
    },
    { 
      id: 9, 
      title: 'Web 3.0 101 Webinar' , 
      date: 'January 2023' ,
      source: '/background/Web3.0101.webp' ,
      link: ''
    },
    { 
      id: 10, 
      title: 'Community Ignite Series Episode #66: Intro to analytics on AWS' , 
      date: 'November 2022' ,
      source: '/background/IntroToAnalytics.webp' ,
      link: ''
    },
    { 
      id: 11, 
      title: 'Community Ignite Series Episode #67: Introduction to big data and analytics' , 
      date: 'November 2022' ,
      source: '/background/BigDataAndAnalytics.webp' ,
      link: ''
    },
    { 
      id: 12, 
      title: 'Best practices for wordpress site in AWS' , 
      date: 'November 2022' ,
      source: '/background/BestPracticesForWordpressSitesInAws.webp' ,
      link: ''
    },
    { 
      id: 13, 
      title: 'Firebase: Multi-platform system integration using Cloud database' , 
      date: 'April 2022' ,
      source: '/background/Firebase.webp' ,
      link: ''
    },
    { 
      id: 14, 
      title: 'PHP MVC Framework Laravel: Developing Serverside Websites' , 
      date: 'April 2022' ,
      source: '/background/Laravel.webp' ,
      link: ''
    },
    { 
      id: 15, 
      title: 'Web Development Series: ABC is for kids, SQL is for YOU' , 
      date: 'October 2020' ,
      source: '/background/ABCIsForKids.webp' ,
      link: ''
    },
    { 
      id: 16, 
      title: 'Web Development Series: Git Ready with Version Control' , 
      date: 'October 2020' ,
      source: '/background/GitReadyWithVC.webp' , 
      link: ''
    },
  ]
  
  const awardsBackgrounds = [
    { 
      id: 1, 
      title: 'Finalist from the recent Appcon 2022', 
      date: 'April 2023' ,
      source: '/background/Otis.webp' , 
      link: 'https://tinyurl.com/2xp499m4'
    },
    { 
      id: 2, 
      title: 'First place in DOST R&D Conference: Scientific Poster Competition' , 
      date: 'December 2022' ,
      source: '/background/DOST.webp' ,
      link: 'https://tinyurl.com/5n6f6342'
    },
  ]
  
  const certificationBackgrounds = [
    { 
      id: 1, 
      title: 'JavaScript Algorithms and Data Structures certification from freeCodeCamp.org', 
      date: 'May 2023' ,
      source: '/background/FCC_DS&A.webp' ,
      link: 'https://tinyurl.com/yc2f3scx'
    }
  ]
</script>
<template>
  <div>
    <SettingsThemeSwitcher />
    <HeaderTitle title="education" />
    <BackgroundEducationDetails v-for="eduBackground in eduBackgrounds" :key="eduBackground.id" :eduBackground="eduBackground" />
    <HeaderTitle title="experience" />
    <BackgroundExperienceDetails v-for="experienceBackground in experienceBackgrounds" :key="experienceBackground.id" :experienceBackground="experienceBackground" />
    <HeaderTitle title="certifications" />
    <BackgroundCertificationDetails :certificationBackgrounds="certificationBackgrounds" />
    <HeaderTitle title="awards" />
    <BackgroundCertificationDetails :certificationBackgrounds="awardsBackgrounds" />
    <HeaderTitle title="webinars/seminars" />
    <BackgroundCertificationDetails :certificationBackgrounds="webinarSeminarBackgrounds" />
    <NavigationBottomBar />
  </div>
</template>