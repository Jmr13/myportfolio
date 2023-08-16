<script setup>
  useHead({
    title: 'Projects',
    meta: [
      { name: 'description', content: 'Projects of Jomar Gamayan' }
    ]
  })
  const thesis_capstones = [
    { 
      id: 1, 
      name: 'E-Dikta' , 
      description: 'A capstone project for the university degree. E-Dikta is an application that helps the visually impaired with reading printed texts. It converts recognized texts into speech output. Uses OpenCV for the Edge detection algorithm and Google ML Kit for Text recognition' ,
      techs: [
        'Java',
        'OpenCV',
        'Google ML Kit'
      ],
      link: '',
      images: [
        '/projects/e-dikta/20230530_183305_0000.webp',
        '/projects/e-dikta/20230530_183305_0001.webp',
        '/projects/e-dikta/20230530_183305_0002.webp',
        '/projects/e-dikta/20230530_183305_0003.webp',
        '/projects/e-dikta/20230530_183305_0004.webp',
        '/projects/e-dikta/20230530_183305_0006.webp',
      ] 
    },
    { 
      id: 2, 
      name: 'Flip' , 
      description: 'An android mobile game (Case Study) submitted for CCS-106 - Applications Development and Emerging Technologies' ,
      techs: [
        'Java'
      ],
      link: '',
      images: [
        '/projects/flip/1.webp',
        '/projects/flip/2.webp',
        '/projects/flip/3.webp',
        '/projects/flip/4.webp',
        '/projects/flip/5.webp',
        '/projects/flip/6.webp'
      ] 
    }
  ];
  const personalprojects = [
    { 
      id: 1, 
      name: 'Toka' , 
      description: 'A Simple PWA To-do list App. This is the PWA demonstrated in our seminar' ,
      techs: [
        'HTML/CSS',
        'Javascript',
        'Indexed DB',
        'PWA'
      ],
      link: 'https://toka-mobile.netlify.app/',
      linkname: 'Toka PWA',
      images: [
        '/projects/toka/20230530_184036_0000.webp',
        '/projects/toka/20230530_184036_0001.webp',
        '/projects/toka/20230530_184036_0002.webp',
        '/projects/toka/20230530_184036_0003.webp',
        '/projects/toka/20230530_184036_0004.webp',
        '/projects/toka/20230530_184037_0005.webp',
      ]
    },
    { 
      id: 2, 
      name: 'University of Caloocan City Website' , 
      description: 'My entry submission for the Web Design category in IT Skills Competition 2022 at the University of Makati. I built my university website without any framework, just pure CSS.' ,
      techs: [
        'HTML/CSS'
      ],
      link: 'https://ucc-website-it-skills-competition.netlify.app/',
      linkname: 'UCC Website for IT Skills Competition'
    },
    {
      id: 3, 
      name: 'Online Exam' , 
      description: 'Static website built with TailwindCSS. I implemented caching of resources, and also minified the css file' ,
      techs: [
        'HTML/CSS',
        'Tailwind CSS'
      ],
      link: 'https://frontendexam-gamayan.netlify.app/',
      linkname: 'Online Exam'
    },
    {
      id: 4, 
      name: 'Just another online exam' , 
      description: 'Static website built with Bootstrap' ,
      techs: [
        'HTML/CSS',
        'Bootstrap'
      ],
      link: 'https://html-css-exam.netlify.app/',
      linkname: 'Just another online exam'
    },
    {
      id: 5, 
      name: 'My Online Portfolio' , 
      description: 'My online portfolio built using NuxtJs. Might as well add it here' ,
      techs: [
        'HTML/CSS',
        'NuxtJS',
        'Nuxt Mailer',
        'Swiper'
      ],
      link: 'https://jomar-gamayan-portfolio.netlify.app/',
      linkname: 'Open my portfolio again'
    },
  ]
</script>
<template>
  <NuxtLayout>
    <HeaderTitle title="thesis/capstone" />
    <ProjectsImageCarousel v-for="project in thesis_capstones" :key="project.id" :project="project" />
    <HeaderTitle title="personal project" />
    <ProjectsImageCarousel v-for="project in personalprojects" :key="project.id" :project="project" />
  </NuxtLayout>
</template>