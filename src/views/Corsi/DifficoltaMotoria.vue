<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Sezione Benvenuto -->
    <section class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-between items-start gap-y-6 md:gap-x-8">
      <!-- Contenuto Testuale e News (a sinistra su desktop, sopra su mobile) -->
      <div class="w-full md:w-2/3 flex flex-col gap-8">
        <!-- Testo -->
        <div class="text-left">
          <div class="text-lg text-gray-700 space-y-6">
            <h1 class="text-red-600 font-bold text-5xl">Difficoltà Motoria</h1>
            <p>
              Sono molto orgolioso che si sia unita alla nostra scuola una nuova ragazza, si chiama Giulia e ha grinta e
              carattere da vendere. La frase “non ce la faccio” è bandita, grazie al suo carattere e all’entusiasmo
              degli altri allievi che hanno saputo farla sentire a suo agio fin da subito. Quest’Arte Marziale ti
              colpisce dentro, ti insegna a rispettare chi hai di fronte e a volte ti fa ritrovare persone che non
              vedevi da anni. Si perchè nel nostro Gruppo Giulia ha ritrovato un vecchio amico, Paolo. E’ giusto dirlo:
              i casi della vita !
            </p>
            <p>
              L'impegno per divulgare questa meravigliosa arte trascende anche difficoltà fisiche. Il desiderio di
              apprenderla è l'unica prerogativa. Sempre tramite lavoro, analisi individuale ed impegno Maestro-Allieva
              si lavora per <strong>adattare alle proprie caratteristiche individuali</strong> lo stile e far
              raggiungere i risultati personali desiderati.
            </p>
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
        <p class="text-center text-gray-600 mt-4">Sifu Luca Campiglio e Giulia</p>
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
import imagePath from "../../assets/Giulia.jpg"; // Import dell'immagine

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
