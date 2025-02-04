<template>
  <nav class="bg-black p-4 text-white flex justify-between items-center">
    <!-- Logo e Nome sito -->
    <div class="flex items-center">
      <!-- Controlla se siamo nella pagina "Benvenuto" -->
      <router-link v-if="$route.path !== '/'" to="/" class="flex items-center">
        <!-- Logo -->
        <img src="../assets/logo.jpg" alt="Logo Wing Chun Kung Fu Tradizionale" class="w-12 h-12 mr-2" />
        <div class="text-2xl font-bold">Wing Chun Kung Fu Tradizionale - Cheung System</div>
      </router-link>
      <div v-else class="flex items-center">
        <!-- Logo come immagine statica se siamo nella pagina "Benvenuto" -->
        <img src="../assets/logo.jpg" alt="Logo Wing Chun Kung Fu Tradizionale" class="w-12 h-12 mr-2" />
        <div class="text-2xl font-bold">Wing Chun Kung Fu Tradizionale - Cheung System</div>
      </div>
    </div>
    <!-- Menu, visibile su schermi più larghi -->
    <ul class="hidden md:flex md:space-x-6">
      <li>
        <router-link v-if="$route.path !== '/'" to="/" class="hover:text-gray-300 text-xl">Benvenuto</router-link>
        <span v-else class="text-xl">Benvenuto</span>
      </li>

      <!-- Dropdown Corsi -->
      <li class="relative group">
        <button class="hover:text-gray-300 text-xl">Corsi</button>
        <ul
          class="absolute left-0 mt-2 w-40 bg-black text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex-col"
        >
          <li>
            <router-link
              v-if="$route.path !== '/corsi/tutti i corsi'"
              to="/corsi/tutti i corsi"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Luoghi e Orari</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Luoghi e Orari</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/corsi/wingchun'"
              to="/corsi/wingchun"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Wing Chun</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Wing Chun</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/corsi/wingchunadvanced'"
              to="/corsi/wingchunadvanced"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Wing Chun Advanced</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Wing Chun Advanced</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/corsi/ctd'"
              to="/corsi/ctd"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >C.T.D.</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">C.T.D.</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/corsi/DifficoltaMotoria'"
              to="/corsi/DifficoltaMotoria"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Difficoltà Motoria</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Difficoltà Motoria</span>
          </li>
        </ul>
      </li>
      <!-- Dropdown Le Nostre Scuole -->
      <li class="relative group">
        <button class="text-white hover:text-gray-300 text-xl">Le Nostre Scuole</button>
        <ul
          class="absolute left-0 mt-2 w-40 bg-black text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex-col"
        >
          <li>
            <router-link
              v-if="$route.path !== '/le-nostre-scuole/GlobalAssociation'"
              to="/le-nostre-scuole/GlobalAssociation"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Global Association</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Global Association</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/le-nostre-scuole/MasterLucaCampiglio'"
              to="/le-nostre-scuole/MasterLucaCampiglio"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Master Luca Campiglio</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Master Luca Campiglio</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/le-nostre-scuole/sifu-loris-vincenzi'"
              to="/le-nostre-scuole/sifu-loris-vincenzi"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Sifu Loris Vincenzi</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Sifu Loris Vincenzi</span>
          </li>
        </ul>
      </li>

      <!-- Dropdown Storia -->
      <li class="relative group">
        <button class="hover:text-gray-300 text-xl">Storia</button>
        <ul
          class="absolute left-0 mt-2 w-40 bg-black text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex-col"
        >
          <li>
            <router-link
              v-if="$route.path !== '/storia/WingChun'"
              to="/storia/WingChun"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >WingChun</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">WingChun</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/storia/ctdStoria'"
              to="/storia/ctdStoria"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >C.T.D.</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">C.T.D.</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/storia/gm-william-cheung'"
              to="/storia/gm-william-cheung"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >GM William Cheung</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">GM William Cheung</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/storia/shaolin-temple'"
              to="/storia/shaolin-temple"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Shaolin Temple</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Shaolin Temple</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/storia/YipMan'"
              to="/storia/YipMan"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Yip Man</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Yip Man</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/storia/bruce-lee'"
              to="/storia/bruce-lee"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Bruce Lee</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Bruce Lee</span>
          </li>
          <li>
            <router-link
              v-if="$route.path !== '/storia/Robert-Downey-Jr'"
              to="/storia/Robert-Downey-Jr"
              class="block px-4 py-2 text-xl hover:bg-gray-600"
              >Robert Downey Jr.</router-link
            >
            <span v-else class="block px-4 py-2 text-xl">Robert Downey Jr.</span>
          </li>
        </ul>
      </li>

      <!-- Dropdown Foto -->
      <li>
        <router-link v-if="$route.path !== '/foto'" to="/foto" class="text-white hover:text-gray-300 text-xl"
          >Foto</router-link
        >
        <span v-else class="text-xl">Foto</span>
      </li>

      <li>
        <router-link v-if="$route.path !== '/contact'" to="/contact" class="text-white hover:text-gray-300 text-xl"
          >Contatti</router-link
        >
        <span v-else class="text-xl">Contatti</span>
      </li>
    </ul>
    <!-- Mobile menu icon -->
    <div class="md:hidden">
      <button @click="open = !open" class="text-white">
        <svg
          v-if="!open"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg
          v-if="open"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Menu mobile che si apre -->
  <div v-if="open" class="text-white flex flex-col items-start space-y-4 md:hidden bg-black p-4">
    <router-link @click="closeMenu" to="/" class="hover:text-gray-300 text-xl">Benvenuto</router-link>

    <!-- Dropdown Corsi per Mobile -->
    <div class="relative">
      <button @click="toggleDropdown('corsi')" class="hover:text-gray-300 text-xl">Corsi</button>
      <div v-show="dropdowns.corsi" class="space-y-2 pl-4 flex-col">
        <router-link @click="closeMenu" to="/corsi/tutti i corsi" class="hover:text-gray-300 text-xl"
          >Tutti i corsi</router-link
        >
        <router-link @click="closeMenu" to="/corsi/wingchun" class="hover:text-gray-300 text-xl">Wing Chun</router-link>
        <router-link @click="closeMenu" to="/corsi/wingchunadvanced" class="hover:text-gray-300 text-xl"
          >Wing Chun Advanced</router-link
        >
        <router-link @click="closeMenu" to="/corsi/ctd" class="hover:text-gray-300 text-xl">C.T.D.</router-link>
        <router-link @click="closeMenu" to="/corsi/DifficoltaMotoria" class="hover:text-gray-300 text-xl"
          >Difficoltà Motoria</router-link
        >
      </div>
    </div>

    <!-- Dropdown Le Nostre Scuole per Mobile -->
    <div class="relative">
      <button @click="toggleDropdown('le-nostre-scuole')" class="hover:text-gray-300 text-xl">Le Nostre Scuole</button>
      <div v-show="dropdowns['le-nostre-scuole']" class="space-y-2 pl-4 flex-col">
        <router-link @click="closeMenu" to="/le-nostre-scuole" class="hover:text-gray-300 text-xl"
          >Le Nostre Scuole</router-link
        >
        <router-link @click="closeMenu" to="/le-nostre-scuole/scuole-riconosciute" class="hover:text-gray-300 text-xl"
          >Scuole Riconosciute</router-link
        >
        <router-link @click="closeMenu" to="/le-nostre-scuole/sifu-loris-vincenzi" class="hover:text-gray-300 text-xl"
          >Sifu Loris Vincenzi</router-link
        >
      </div>

      <!-- Dropdown Storia per Mobile -->
      <div class="relative">
        <button @click="toggleDropdown('storia')" class="hover:text-gray-300 text-xl">Storia</button>
        <div v-show="dropdowns.storia" class="space-y-2 pl-4 flex-col">
          <router-link @click="closeMenu" to="/storia/WingChun" class="hover:text-gray-300 text-xl"
            >WingChun</router-link
          >
          <router-link @click="closeMenu" to="/storia/ctd" class="hover:text-gray-300 text-xl">C.T.D.</router-link>
          <router-link @click="closeMenu" to="/storia/gm-william-cheung" class="hover:text-gray-300 text-xl"
            >GM William Cheung</router-link
          >
          <router-link @click="closeMenu" to="/storia/shaolin-temple" class="hover:text-gray-300 text-xl"
            >Shaolin Temple</router-link
          >
          <router-link @click="closeMenu" to="/storia/YipMan" class="hover:text-gray-300 text-xl">Yip Man</router-link>
          <router-link @click="closeMenu" to="/storia/bruce-lee" class="hover:text-gray-300 text-xl"
            >Bruce Lee</router-link
          >

          <router-link @click="closeMenu" to="/storia/Robert-Downey-Jr" class="hover:text-gray-300 text-xl"
            >Robert Downey Jr.</router-link
          >
        </div>
      </div>
    </div>

    <router-link @click="closeMenu" to="/foto" class="hover:text-gray-300 text-xl">Foto</router-link>
    <router-link @click="closeMenu" to="/contact" class="hover:text-gray-300 text-xl">Contatti</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Variabile per gestire l'apertura/chiusura del menu mobile
let open = ref(false);

// Oggetto per gestire l'apertura dei singoli dropdown
let dropdowns = ref({
  corsi: false,
  storia: false,
  "le-nostre-scuole": false,
});

// Funzione per alternare lo stato dei dropdown
function toggleDropdown(menu) {
  dropdowns.value[menu] = !dropdowns.value[menu];
}

// Funzione per chiudere il menu mobile
function closeMenu() {
  open.value = false;
}
</script>

<style scoped>
/* Assicura che il container del pulsante e del menu sia relativo */
.group {
  position: relative;
  display: inline-block;
}

/* Stile del dropdown per evitare spazi vuoti */
.group ul {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  position: absolute;
  z-index: 10;
  visibility: hidden;
  top: 100%; /* Assicura che il menu sia esattamente sotto il pulsante */
  left: 0;
  width: max-content;
  margin: 0; /* Rimuove margini indesiderati */
  padding: 0; /* Rimuove padding aggiuntivo */
}

/* Mantiene il menu aperto quando il mouse è sopra il pulsante o il menu */
.group:hover > ul,
.group:focus-within > ul,
.group ul:hover {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
}

/* Per il menu mobile */
.md:hidden .space-y-2 {
  z-index: 10; /* Imposta un valore elevato per i dropdown mobile */
}

/* Personalizza il colore del menu hamburger */
.md:hidden button {
  color: white; /* Colore bianco per il menu hamburger */
}

/* Colore di hover per il menu hamburger */
.md:hidden button:hover {
  color: #d1d5db; /* Colore chiaro per hover */
}

/* Colori per il menu mobile */
.bg-black {
  background-color: black; /* Colore nero per lo sfondo */
}

.hover\:text-gray-300:hover {
  color: #d1d5db; /* Colore chiaro al passaggio del mouse */
}

/* Gestione dello spazio per il menu mobile */
.space-y-4 {
  padding-left: 16px;
  padding-right: 16px;
}

/* Stile per i dropdown */
.relative {
  position: relative;
}

.pl-4 {
  padding-left: 16px;
}

/* Assicurati che i dropdown siano disposti verticalmente */
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>
