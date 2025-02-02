<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Sezione Benvenuto -->
    <section class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-between items-start gap-y-6 md:gap-x-8">
      <!-- Contenuto Testuale e News (a sinistra su desktop, sopra su mobile) -->
      <div class="w-full md:w-2/3 flex flex-col gap-8">
        <!-- Testo -->
        <div class="text-left">
          <div class="text-lg text-gray-700 space-y-6">
            <h1 class="text-red-600 font-bold text-5xl">LUOGHI E ORARI</h1>

            <h2 class="text-red-600 font-bold text-3xl">CORSI WING CHUN BASE</h2>

            <p class="text-black font-bold text-2xl">LEGNAGO (Verona)</p>
            <p><strong>Dove:</strong> Via Leopardi, 3 – Scuole Elementari G. Cotta</p>
            <p>
              <strong>Quando:</strong>Martedì e Giovedì dalle ore 19.00 alle ore 20.00 – Inizio del corso Martedì 08
              Ottobre 2024
            </p>

            <!-- Sezione "A chi mi rivolgo" -->
            <p class="text-black font-bold text-2xl">BORGO SAN MARCO – MONTAGNANA (Padova)</p>
            <p><strong>Dove:</strong> Scuole Elementari via Arzarin, 2</p>
            <p>
              <strong>Quando:</strong>Lunedì dalle ore 18.45 alle ore 19.45 – Inizio del corso Lunedì 07 Ottobre 2024
            </p>

            <!-- Sezione "Perchè i miei corsi" -->
            <p class="text-black font-bold text-2xl">ZEVIO (Verona)</p>
            <p><strong>Dove:</strong> Via Altichiero, 21 – Scuole Medie</p>
            <p>
              <strong>Quando:</strong>Venerdì dalle ore 18.30 alle ore 19.30 – Inizio del corso Venerdì 04 Ottobre 2024
            </p>

            <h2 class="text-red-600 font-bold text-3xl">CORSI WING CHUN ADVANCED E C.T.D.</h2>
            <p class="text-black font-bold text-2xl">LEGNAGO (Verona)</p>
            <p><strong>Dove:</strong> Via Leopardi, 3 – Scuole Elementari G. Cotta</p>
            <p><strong>Quando:</strong> Sabato dalle ore 16.00 alle ore 17.30</p>
          </div>
        </div>
      </div>

      <!-- Video -->
      <div class="w-full md:w-2/3">
        <video :src="videoSrc" class="w-full rounded-lg shadow-lg" controls loop>
          Il tuo browser non supporta il tag video.
        </video>
        <!-- Nota sotto il video -->
        <p class="text-center text-gray-600 mt-4">CORSI-2023-24</p>
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import videoPath from "../../assets/CORSI-2023-24.mov"; // Import del video

const isLightboxOpen = ref(false);
const videoSrc = ref(videoPath);

const openLightbox = () => {
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};
</script>

<style scoped>
/* Nessuna modifica necessaria qui, solo assicurati che l'elemento principale abbia la struttura flex */
</style>
