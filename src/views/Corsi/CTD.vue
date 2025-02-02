<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Sezione Benvenuto -->
    <section class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-between items-start gap-y-6 md:gap-x-8">
      <!-- Contenuto Testuale e News (a sinistra su desktop, sopra su mobile) -->
      <div class="w-full md:w-2/3 flex flex-col gap-8">
        <!-- Testo -->
        <div class="text-left">
          <div class="text-lg text-gray-700 space-y-6">
            <h1 class="text-red-600 font-bold text-5xl">C.T.D. (Cheung’s Tactical Defense)</h1>
            <p>Il corso C.T.D. va a completare in maniera molto efficace il nostro Wing Chun Tradizionale.</p>
            <p>
              Il corso C.T.D. è strutturato nei seguenti livelli che dovranno essere conseguiti con esami e prove
              specifiche:
            </p>

            <h3 class="text-black font-bold text-2xl">PROGETTO ALPHA</h3>
            <p>
              <strong>LIVELLO ALPHA 1:</strong> conoscenza e pratica di tutte le tecniche di difesa a mani nude (i
              praticanti del corso Wing Chun inizieranno dal livello Alpha 2);
            </p>
            <p>
              <strong>LIVELLO ALPHA 2:</strong> conoscenza e pratica di tecniche di Leva e Presa, indispensabili per il
              disarmo da armi (bastone, coltello, ecc….);
            </p>
            <p>
              <strong>LIVELLO ALPHA 3:</strong> conoscenza e pratica delle principali tecniche di difesa da Bastone,
              Coltello, sviluppo e perfezionamento dei livelli Alpha 1, Alpha 2, lotta a terra.
            </p>

            <h3 class="text-black font-bold text-2xl">PROGETTO BRAVO</h3>
            <p>
              <strong>LIVELLO BRAVO 1:</strong> conoscenza e pratica di tutte le tecniche di uso e difesa da bastone:
              mani nude contro bastone e Bastone contro Bastone. Tecniche di Escrima Serrada;
            </p>
            <p>
              <strong>LIVELLO BRAVO 2:</strong> conoscenza e pratica di tutte le tecniche di uso e difesa da coltello:
              mani nude contro coltello, uso del coltello con impugnatura classica e reverse, coltello contro coltello;
            </p>
            <p>
              <strong>LIVELLO BRAVO 3:</strong> conoscenza e pratica dell’uso del PR-24 – BR-103. Sviluppo e
              perfezionamento dei livelli Bravo 1, Bravo 2. Difesa da più avversari armati.
            </p>
            <h3 class="text-black font-bold text-2xl">PROGETTO CHARLIE</h3>
            <p>
              <strong>LIVELLO CHARLIE 1:</strong> conoscenza e pratica del Bastone Telescopico. Uso e maneggio base
              della Pistola. Conoscenza e pratica delle tecniche di disarmo da Pistola e Fucile. Sviluppo e pratica dei
              livelli Alpha e Bravo;
            </p>
            <p>
              <strong>LIVELLO CHARLIE 2:</strong> programma fisico medio. Tecniche di difesa letali. Resistenza al
              dolore;
            </p>
            <p>
              <strong>LIVELLO CHARLIE 2:</strong> programma fisico intenso. Resistenza al dolore e condizionamento
              psicologico. Valutazione rischi e minacce. Operazioni tecnico tattiche militari.
            </p>

            <p>
              <strong>Ti aspetto per la tua lezione di prova gratuita</strong>
            </p>
          </div>
        </div>
      </div>

      <!-- Immagine con Lightbox (a destra su desktop, sopra su mobile) -->
      <div class="w-full md:w-1/3">
        <img
          :src="imageSrc"
          alt="Tecnica di leva al gomito del corso C.T.D."
          class="w-full rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105 md:max-h-90 object-cover"
          @click="openLightbox"
        />
        <!-- Nota sotto l'immagine -->
        <p class="text-center text-gray-600 mt-4">Tecnica di leva al gomito del corso C.T.D.</p>
      </div>
      <!-- Immagine con Lightbox (a destra su desktop, sopra su mobile) -->
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
import imagePath from "../../assets/CTD1.jpg"; // Import dell'immagine

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
