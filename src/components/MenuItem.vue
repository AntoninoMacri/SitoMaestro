<template>
  <div>
    <!-- Menu desktop -->
    <ul v-if="!mobile" class="flex space-x-4">
      <li v-for="item in menu" :key="item.name" class="relative group">
        <router-link :to="item.to" class="text-white hover:text-gray-300">{{ item.name }}</router-link>
        <ul
          v-if="item.children && item.children.length > 0"
          class="absolute left-0 mt-2 w-40 bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"
        >
          <!-- Chiamata ricorsiva per i sottomenù -->
          <MenuItem :menu="item.children" />
        </ul>
      </li>
    </ul>

    <!-- Menu mobile -->
    <div v-if="mobile" class="flex flex-col items-start space-y-4">
      <li v-for="item in menu" :key="item.name" class="relative">
        <button @click="toggleDropdown(item.name)" class="text-white hover:text-gray-300">
          {{ item.name }}
        </button>
        <div v-show="dropdowns[item.name]" class="space-y-2 pl-4">
          <router-link
            v-for="child in item.children"
            :key="child.name"
            :to="child.to"
            class="text-white hover:text-gray-300"
            >{{ child.name }}</router-link
          >
          <!-- Ricorsione per sottomenù -->
          <MenuItem v-if="item.children" :menu="item.children" mobile />
        </div>
      </li>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Proprietà
const props = defineProps({
  menu: Array,
  mobile: Boolean,
});

// Stato per gestire l'apertura dei dropdown nel menu mobile
let dropdowns = ref({});

// Funzione per alternare lo stato di apertura dei dropdown
function toggleDropdown(menuName) {
  dropdowns.value[menuName] = !dropdowns.value[menuName];
}
</script>

<style scoped>
/* Personalizza il colore di hover e l'aspetto */
.hover\:text-gray-300:hover {
  color: #d1d5db; /* Colore chiaro al passaggio del mouse */
}

.text-white {
  color: white;
}

/* Stili per il menu */
.bg-gray-800 {
  background-color: #2d3748; /* Colore grigio per il fondo */
}

.group:hover ul,
.group:focus-within ul {
  opacity: 1;
}

.group ul {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

/* Stile per i dropdown mobile */
.pl-4 {
  padding-left: 16px;
}
</style>
