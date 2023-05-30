<script setup>
  const platformDetails = [
    { id: 1 , title:'Facebook' , icon:'ri-facebook-line' , details:'ahvavshjaba' } ,
    { id: 2 , title:'LinkedIn' , icon:'ri-linkedin-line' , details:'abbabzjsbaba' } ,
    { id: 3 , title:'Github' , icon:'ri-github-line' , details:'Jmhajajajjajar13' } ,
    { id: 4 , title:'Phone' , icon:'ri-smartphone-line' , details:'bqjasbakjs' } ,
  ]
</script>
<template>
  <div>
    <SettingsThemeSwitcher />
    <HeaderTitle title="email me" />
    <ContactEmailSender />
    <HeaderTitle title="contact" />
    <ContactPlatformDetails :platforms="platformDetails" />
    <NavigationBottomBar />
  </div>
</template>