<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Sezione Benvenuto -->
    <section class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-between items-start gap-y-6 md:gap-x-8">
      <!-- Contenuto Testuale e News (a sinistra su desktop, sopra su mobile) -->
      <div class="w-full md:w-2/3 flex flex-col gap-8">
        <!-- Titolo -->
        <h1 class="text-3xl font-bold text-red-600 mb-4 md:mb-0 md:text-left text-center">
          Benvenuti nella mia scuola di Wing Chun Tradizionale
        </h1>

        <!-- Testo -->
        <div class="text-left">
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
      </div>

      <!-- Immagine con Lightbox (a destra su desktop, sopra su mobile) -->
      <div class="w-full md:w-1/3">
        <img
          :src="imageSrc"
          alt="Sifu Luca Campiglio con il Gran Maestro William Cheung, uno scatto durante una lezione di Wing Chun"
          class="w-full rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105 md:max-h-90 object-cover"
          @click="openLightbox"
        />
        <!-- Nota sotto l'immagine -->
        <p class="text-center text-gray-600 mt-4">Sifu Luca Campiglio con il Grande Maestro William Cheung</p>
      </div>
    </section>

    <!-- Sezione News (a destra su desktop, sotto l'immagine su mobile) -->
    <div :class="newsOrderClass" class="w-full md:w-2/3 mx-auto p-6">
      <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <h3 class="text-3xl font-bold text-red-600 mb-6 flex items-center">
          <!-- Icona di megafono a sinistra -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
            />
          </svg>
          News
        </h3>
        <ul class="text-gray-600 space-y-4">
          <li><strong>Foto Eric Oram Seminar – 19 Ottobre 2024</strong></li>
          <li><strong>Foto Training Camp – 1 Ottobre 2024</strong></li>
          <li><strong>Iscrizioni Corsi Wing Chun 2024 – 2025</strong></li>
        </ul>
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="isLightboxOpen"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      @click="closeLightbox"
    >
      <img :src="imageSrc" alt="Immagine Lightbox" class="max-w-full max-h-full rounded-lg shadow-lg" />
    </div>

    <!-- Componente Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Footer from "../components/Footer.vue"; // Aggiungi il percorso corretto al footer
import imagePath from "../assets/SifuLuca-GranMasterCheung.jpeg"; // Import dell'immagine

const isLightboxOpen = ref(false);
const imageSrc = ref(imagePath); // Usa l'import invece del percorso stringa

const openLightbox = () => {
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};

// Computed property per determinare l'ordine della sezione News su mobile
const newsOrderClass = computed(() => {
  return window.innerWidth < 768 ? "order-last" : ""; // Sposta la sezione News sotto l'immagine su schermi piccoli
});
</script>

<style scoped>
/* Nessuna modifica necessaria qui, solo assicurati che l'elemento principale abbia la struttura flex */
</style>
