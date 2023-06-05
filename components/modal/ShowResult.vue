<script setup>
  const props = defineProps(['message'])
</script>
<template>
  <div class="modal-overlay">
    <div class="modal">
      <i class="ri-mail-check-line"></i>
      <p>{{ message }}</p>
      <button @click="$emit('close-modal') ; window.location.reload();">Go Home</button>
    </div>
  </div>
</template>
<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.6);
  }
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    height: 50vh;
    width: 80vw;
    margin-top: 10%;
    padding: 5vh 5vw;
    border-radius: 20px;
  }
  i {
    font-size: 10rem;
  }
  button {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    padding: 2vh 2vw;
    font-weight: bold;
    border-radius: var(--rounded);
  }
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
  }
</style>