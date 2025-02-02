<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Sezione Benvenuto -->
    <section class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-between items-start gap-y-6 md:gap-x-8">
      <!-- Contenuto Testuale e News (a sinistra su desktop, sopra su mobile) -->
      <div class="w-full md:w-2/3 flex flex-col gap-8">
        <!-- Testo -->
        <div class="text-left">
          <div class="text-lg text-gray-700 space-y-6">
            <p class="text-red-600 font-bold text-2xl">Chi sono</p>
            <p>
              Mi chiamo Luca Campiglio e sono allievo diretto del Grande Maestro William Cheung, amico e compagno di
              allenamento del grande Bruce Lee.
            </p>
            <p>
              Dal 1994 pratico Wing Chun tradizionale e dal 1997 lo insegno presso le scuole di Legnago, Montagnana e
              Zevio.
            </p>

            <!-- Sezione "A chi mi rivolgo" -->
            <p class="text-red-600 font-bold text-2xl">A chi mi rivolgo</p>
            <p>
              Ai miei corsi sono benvenute tutte le persone che desiderano avvicinarsi a questa fantastica arte marziale
              inventata da una “monaca”.
            </p>

            <!-- Sezione "Perchè i miei corsi" -->
            <p class="text-red-600 font-bold text-2xl">Perchè i miei corsi</p>
            <p>
              Sono sempre attento a proporre ai miei allievi varie strategie di allenamento e organizzo Stage nazionali
              e internazionali con grandi maestri presso le nostre palestre.
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
