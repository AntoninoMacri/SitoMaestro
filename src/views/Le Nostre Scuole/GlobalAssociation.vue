<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Sezione Benvenuto -->
    <section class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-between items-start gap-y-6 md:gap-x-8">
      <!-- Contenuto Testuale e News (a sinistra su desktop, sopra su mobile) -->
      <div class="w-full md:w-2/3 flex flex-col gap-8">
        <!-- Testo -->
        <div class="text-left">
          <div class="text-lg text-gray-700 space-y-6">
            <h1 class="text-red-600 font-bold text-5xl">The Global Traditional Wing Chun Kung Fu Association</h1>
            <p>
              La <strong>CTD Wing Chun Academy </strong> insegna in Italia ed è Responsabile per l’Europa, riconosciuta
              dalla <strong>The Global Traditional Wing Chun Kung Fu Association</strong> che divulga il nostro Wing
              Chun in tutto il mondo.
            </p>
            <p>
              La CTD Wing Chun Academy tutela e garantisce il livello tecnico e gli standard di esperienza dei singoli
              istruttori tramite un percorso di insegnamento continuo. Ogni istruttore deve essere abilitato
              all’insegnamento dalla suddetta organizzazione tramite certificato di insegnamento rilasciato a seguito di
              un esame.
            </p>
            <p class="text-black font-bold text-2xl">Master Luca Campiglio</p>
            <p><strong>Dove:</strong> Legnago (VR) – Zevio (VR) Montagnana (PD)</p>
            <p class="text-black font-bold text-2xl">Sifu Loris Vincenzi</p>
            <p><strong>Dove:</strong> Trevenzuolo (VR)</p>
            <p>Scuola riconosciute dalla CTD Wing Chun Academy</p>
          </div>
        </div>
      </div>

      <!-- Immagine con Lightbox (a destra su desktop, sopra su mobile) -->
      <div class="w-full md:w-1/3">
        <img
          :src="imageSrc"
          alt="Sifu Luca Campiglio che si allena con l'uomo di legno"
          class="w-full rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105 md:max-h-90 object-cover"
          @click="openLightbox"
        />
        <!-- Nota sotto l'immagine -->
        <p class="text-center text-gray-600 mt-4">Sifu Luca Campiglio e il Grande Maestro William Cheung</p>
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
import { ref, computed } from "vue";
import imagePath from "../../assets/SifuLuca-GranMasterCheung.jpeg"; // Import dell'immagine

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
