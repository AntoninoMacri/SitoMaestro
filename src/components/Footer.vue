<template>
  <footer class="bg-black text-white py-8 mt-auto">
    <div class="max-w-7xl mx-auto px-8">
      <div class="flex flex-col items-start space-y-4">
        <p class="text-lg">Contatti</p>
        <ContactInfo />
        <p class="text-right w-full">© 2025 CTD Wing Chun Academy</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import ContactInfo from "./ContactInfo.vue";
</script>

<style scoped></style>
