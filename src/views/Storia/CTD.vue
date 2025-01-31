<template>
  <div class="page-container">
    <h1>Nome della Pagina</h1>
    <p>Benvenuto sulla pagina di {{ pageName }}. Qui andranno i contenuti.</p>
  </div>
</template>

<script setup lang="ts">
// Definisci le proprietà della pagina se necessario
import { ref } from "vue";

const pageName = ref("NomePagina"); // Puoi cambiare questo valore in base alla pagina
</script>

<style scoped>
.page-container {
  padding: 20px;
}

h1 {
  font-size: 2rem;
  color: #333;
}

p {
  font-size: 1rem;
  color: #666;
}
</style>
