<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Sezione Benvenuto -->
    <section
      class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-y-6 md:gap-x-8"
    >
      <!-- Immagine con Lightbox -->
      <div class="w-full md:w-1/3">
        <img
          :src="imageSrc"
          alt="Immagine Benvenuto"
          class="w-full rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
          @click="openLightbox"
        />
      </div>

      <!-- Contenuto Testuale -->
      <div class="w-full md:w-2/3 text-left">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Benvenuti nella mia scuola di Wing Chun Tradizionale</h1>

        <div class="text-lg text-gray-700 space-y-6">
          <p>
            Mi chiamo Luca Campiglio e sono allievo del GM William Cheung. Dal 1994 inizio a praticare il Wing Chun e
            dal 1997 pratico ed insegno il Wing Chun Tradizionale presso le mie scuole di Legnago, Montagnana e Zevio.
          </p>
          <p>
            Ai miei corsi sono benvenute tutte le persone che desiderano avvicinarsi a questa fantastica arte marziale
            inventata da una “monaca”.
          </p>
          <p>
            Sono sempre attento a proporre ai miei allievi varie strategie di allenamento organizzando anche Stage
            nazionali e internazionali.
          </p>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div
      v-if="isLightboxOpen"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      @click="closeLightbox"
    >
      <img :src="imageSrc" alt="Immagine Lightbox" class="max-w-full max-h-full rounded-lg shadow-lg" />
    </div>

    <!-- Sezione News -->
    <section class="max-w-7xl mx-auto p-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">Ultime News</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Titolo News 1</h3>
          <p class="text-gray-600">Descrizione breve della news.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Titolo News 2</h3>
          <p class="text-gray-600">Un'altra news interessante.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Titolo News 3</h3>
          <p class="text-gray-600">Eventi e competizioni importanti.</p>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Footer from "../components/Footer.vue";
import imagePath from "../assets/SifuLuca-GranMasterCheung.jpeg"; // Import dell'immagine

const isLightboxOpen = ref(false);
const imageSrc = ref(imagePath); // Usa l'import invece del percorso stringa

const openLightbox = () => {
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};
</script>
