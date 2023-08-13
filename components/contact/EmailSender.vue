<script setup>
  const gmailRes = ref()
  const errors = ref()
  const username = ref()
  const useremail = ref()
  const usermessage = ref()
  const showModal = ref(true)
  
  async function sendGmail() {
    gmailRes.value = await $fetch('/api/gmail' , {
    method: 'POST',
    body: {
      name: username.value,
      email: useremail.value,
      message: usermessage.value
      }
    })
    .catch((err) => {
      errors.value = err
    })
  }
</script>
<template>
    <div class="container">
      <form @submit.prevent="sendGmail()" class="form">
        <div>
          <label for="name">Name</label>
          <input v-model="username" type="text" name="name" id="name" placeholder="Type your Name" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input v-model="useremail" type="email" name="email" id="email" placeholder="Type your Email" required />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea v-model="usermessage" name="message" id=message rows="8" cols="40" placeholder="Type your message" required ></textarea>
        </div>
        <input type="submit" name="submit" value="Send Email" class="btn">
      </form>
      <ModalShowResult v-if="gmailRes" message="Your message have been sent Successfully" @close-modal="gmailRes = null" />
      <ModalShowResult v-if="errors" message="There is an error. Please check your internet connection" @close-modal="errors = null" />
    </div>
</template>
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 2vh 0;
  }
  .form input , .form textarea {
    border: 2px solid var(--secondary-color);
    border-radius: var(--rounded);
    padding: 1vh 2vw;
  }
  .form label {
    font-weight: bold;
  }
  .form div {
    display: flex;
    flex-direction: column;
    gap: 1vh 0;
  }
  .btn {
    padding: 2vh 0 !important;
    width: 100%;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    text-align: center;
    font-weight: bold !important;
  }
  @media (min-width : 1200px) {
    .container {
      width: 70%;
      margin: auto;
    }
    .form {
      gap: 5vh 0;
    }
  }
</style>