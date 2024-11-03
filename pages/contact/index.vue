<script setup>
  useHead({
    title: 'Contact',
    meta: [
      { name: 'description', content: 'Contact details of Jomar Gamayan' }
    ]
  })
  
  const platformDetails = [
    { id: 1 , title:'LinkedIn' , icon:'ri-linkedin-line' , details:'Jomar Gamayan' , link:'https://www.linkedin.com/in/jomar-gamayan' } ,
    { id: 2 , title:'Github' , icon:'ri-github-line' , details:'Jmr13' , link:'https://github.com/Jmr13' } ,
    { id: 3 , title:'Phone' , icon:'ri-smartphone-line' , details:'09762947359' , link:'tel:09762947359' } ,
  ]
</script>
<template>
  <NuxtLayout>
    <HeaderTitle title="email me" />
    <ContactEmailSender />
    <HeaderTitle title="contact me" />
    <ContactPlatformDetails :platforms="platformDetails" />
  </NuxtLayout>
</template>