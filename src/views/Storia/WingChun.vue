<template>
  <div class="max-w-4xl mx-auto p-6 text-gray-700 space-y-6">
    <!-- Titolo principale -->
    <h1 class="text-red-600 font-bold text-3xl text-center">La Storia del Wing Chun</h1>

    <!-- Sezione: Origini -->
    <h2 class="text-red-600 font-bold text-2xl">Le Origini</h2>
    <p>
      La storia del Wing Chun comincia in Cina durante la dinastia Qing, con la distruzione del famoso monastero di
      Shaolin e la fuga di cinque monaci detti “i cinque antenati”...
    </p>
    <p>
      Uno di questi monaci, o meglio una monaca, era Ng Mui, la quale si rifugiò nel monastero della “Gru Bianca”...
    </p>
    <img
      src="../../assets/ngmui.webp"
      alt="Rappresentazione di Ng Mui e Yim Wing Chun"
      class="w-full max-w-xs mx-auto rounded-lg shadow-lg object-contain"
    />
    <p class="text-center text-gray-600 mt-4">NG Mui origini Winchun</p>

    <!-- Sezione: Sviluppo e Diffusione -->
    <h2 class="text-red-600 font-bold text-2xl">Sviluppo e Diffusione</h2>
    <p>
      La leggenda ci tramanda che la monaca Ng Mui prese come sua discepola una giovane ragazza di nome Yim Wing Chun...
    </p>
    <p>La giovane donna non insegnò lo stile tramandatole dalla monaca tranne che a suo marito...</p>
    <img
      src="../../assets/NgMuiEYimWinChun.jpg"
      alt="Ip Man in allenamento"
      class="w-full max-w-xs mx-auto rounded-lg shadow-lg object-contain"
    />

    <!-- Sezione: Il Wing Chun Oggi -->
    <h2 class="text-red-600 font-bold text-2xl">Il Wing Chun Oggi</h2>
    <p>
      Attraverso ormai quattro secoli di storia questa meravigliosa arte è giunta fino a noi grazie al lavoro di
      grandi...
    </p>
    <p>Sicuramente il più famoso degli studenti del Gran Maestro Yip Man è lo scomparso Bruce Lee...</p>
    <img
      src="../../assets/StoriaFinoWilliamCheung.jpeg"
      alt="Praticanti di Wing Chun"
      class="w-full max-w-xs mx-auto rounded-lg shadow-lg object-contain"
    />

    <p>In Italia gli insegnamenti del Grand Master William Cheung erano diffusi dal SiFu Gianluca Boccato...</p>
    <img
      src="../../assets/RiconoscimentoUfficiale.jpeg"
      alt="Praticanti di Wing Chun"
      class="w-full max-w-xs mx-auto rounded-lg shadow-lg object-contain"
    />

    <!-- Nota sulla trascrizione -->
    <h2 class="text-red-600 font-bold text-2xl">Nota sulla Trascrizione</h2>
    <p>È stata adottata la trascrizione in caratteri occidentali Wing Chun...</p>
    <p>I cinesi scrivono questo nome con i caratteri:</p>
    <img
      src="../../assets/WinChunCaratteri.jpg"
      alt="Caratteri cinesi di Wing Chun"
      class="w-full max-w-xs mx-auto rounded-lg shadow-lg object-contain"
    />

    <!-- Bottone per provare -->
    <div class="mt-6 flex justify-center">
      <router-link
        to="/corsi/tutti i corsi"
        class="inline-block px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300"
      >
        Voglio provare
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoriaWingChun",
};
</script>
