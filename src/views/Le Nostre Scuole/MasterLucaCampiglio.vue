<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Sezione Benvenuto -->
    <section class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-between items-start gap-y-6 md:gap-x-8">
      <!-- Contenuto Testuale e News (a sinistra su desktop, sopra su mobile) -->
      <div class="w-full md:w-2/3 flex flex-col gap-8">
        <!-- Testo -->
        <div class="text-left">
          <div class="text-lg text-gray-700 space-y-6">
            <h1 class="text-red-600 font-bold text-5xl">Master Luca Campiglio</h1>
            <h2 class="text-black font-bold text-2xl">Contatti</h2>
            <p><strong>Cel. /WhatsApp</strong> 3358014379</p>
            <p><strong>e-mail:</strong> cm.lucky71@gmail.com</p>
            <p>Contattatemi per info e per la lezione di prova Gratutita</p>
            <h2 class="text-black font-bold text-2xl">Storia e percorso personale</h2>
            <p>
              Nasce in Italia il 29 Marzo 1971. Fin dalla giovane età è appassionato di arti marziali; infatti a 15 anni
              inizia a praticare il Karatè nel proprio paese di origine, Minerbe, che si trova vicino a Verona e lo
              proseguirà per ben tre anni fino ad arrivare alla “cintura verde”. In seguito si avvicina per un breve
              periodo allo Judo, ma senza trarne particolare soddisfazione. La sua prima volta verso il Kung Fu Shaolin
              è nel 1990 ed è proprio in questi anni che alcuni suoi amici gli chiedono di allenarsi con lui per
              imparare. Durante questi allenamenti viene sfidato da degli altri praticanti di arti marziali, vicino al
              suo paese, riuscendo a venirne fuori sempre vincitore. Tramite il suo istruttore di Shaolin conosce un
              Maestro di Wing Chun Kung fu. Sorpreso da questo sistema per la sua efficacia inizia a prendere delle
              lezioni in palestra e private. Successivamente viene deluso del Wing Chun che praticava a Verona al quale
              dedica altri tre anni: durante il confronto con un praticante di un altro stile, non riesce a mettere in
              pratica tutti i principi di quei due sistemi Wing Chun che gli sono stati insegnati. Più tardi decide di
              andare a conoscere Gianluca Boccato, Maestro Wing Chun Tradizionale, che insegna il sistema di William
              Cheung; rimane subito entusiasta di questo sistema così diverso dagli altri e molto più aggressivo. Master
              Gianluca Boccato gli spiega praticamente e teoricamente dove il Wing Chun che praticava prima avesse delle
              lacune, e come fosse basato su principi inapplicabili contro altri sistemi di lotta. Decide di seguirlo
              dall’estate del 1997, raggiungendo la qualifica di Provisional Master e responsabile per la provincia di
              Verona.
            </p>
            <p>
              Il 7 Luglio 2013 Viene Nominato dal Grand Master William Cheung suo Rappresentante in Italia con la
              qualifica di Master. Attualmentre collabora con la scuola del GM William Cheung in Australia e con le
              scuole di Los Angeles.
            </p>
            <img alt="" src="../../assets/CertificatoRappresentanteItalia.jpg" />
            <p>
              A Marzo 2019 Viene Nominato dal GM William Cheung e tutta la The Global Traditional Wing Chun Kung Fu
              Association Rappresentante Europeo (for Southern e Western Europe).
            </p>
            <img alt="" src="../../assets/CertificatoRappresentanteEuropa.jpeg" />
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
import imagePath from "../../assets/SifuLuca-GranMasterCheung2.jpeg"; // Import dell'immagine

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
