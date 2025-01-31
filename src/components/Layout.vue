<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <slot></slot>
      <!-- Qui verranno renderizzate le pagine -->
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
}
nav a:hover {
  color: #42b883;
}
main {
  padding: 20px;
}
</style>
