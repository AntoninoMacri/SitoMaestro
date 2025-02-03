<template>
  <div class="max-w-4xl mx-auto p-6 text-gray-700 space-y-6">
    <!-- Titolo principale -->
    <h1 class="text-red-600 font-bold text-3xl text-center">La Storia del Wing Chun</h1>

    <!-- Sezione: Origini -->
    <h2 class="text-red-600 font-bold text-2xl">Le Origini</h2>
    <p>
      La storia del Wing Chun comincia in Cina durante la dinastia Qing, con la distruzione del famoso monastero di
      Shaolin e la fuga di cinque monaci detti “i cinque antenati”.
    </p>
    <p>
      Uno di questi monaci, o meglio una monaca, era Ng Mui, la quale si rifugiò nel monastero della “Gru Bianca” sui
      pendii delle montagne Daliang. Qui, al confine tra le provincie del Sichuan e dello Yunnan, la leggenda vuole che
      Ng Mui assistesse a un combattimento tra una Gru e un Serpente. Ispirata dallo scontro, combinò i movimenti di
      questi due animali con le tecniche del monastero di Shaolin da dove ella proveniva, creando così una nuova arte
      marziale, ancora senza nome.
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
      La leggenda ci tramanda che la monaca Ng Mui prese come sua discepola una giovane ragazza di nome Yim Wing Chun,
      la quale era infastidita da uno scontroso bullo del suo villaggio che la voleva sposare con la forza. La monaca
      istruì la giovane ragazza alla sua nuova arte non ancora battezzata; costei per evitare di sposare il
      malintenzionato lo sfidò in un combattimento, e se avesse vinto lei si sarebbe potuta sottrarre al matrimonio
      contro volontà. Yim Wing Chun vinse l’incontro guadagnandosi una stabile fama di abile combattente.
    </p>
    <p>
      La giovane donna non insegnò lo stile tramandatole dalla monaca tranne che a suo marito, il mercante di sale Leung
      Bok Chao, il quale in onore della moglie chiamò quest’arte con il suo nome: Wing Chun Kuen, “La boxe di Wing Chun”
      (in cinese Yong Chun Quan).
    </p>
    <img
      src="../../assets/NgMuiEYimWinChun.jpg"
      alt="Ip Man in allenamento"
      class="w-full max-w-xs mx-auto rounded-lg shadow-lg object-contain"
    />

    <!-- Sezione: Il Wing Chun Oggi -->
    <h2 class="text-red-600 font-bold text-2xl">Il Wing Chun Oggi</h2>
    <p>
      Attraverso ormai quattro secoli di storia questa meravigliosa arte è giunta fino a noi grazie al lavoro di grandi
      maestri che l’hanno mantenuta viva nel tempo fino a giungere al gran Maestro Yip Man discepolo di Chan Wah Shun.
    </p>
    <p>
      Sicuramente il più famoso degli studenti del Gran Maestro Yip Man è lo scomparso Bruce Lee a cui si deve molta
      della notorietà del Wing Chun. Bruce Lee fu introdotto allo studio del Wing Chun da un allievo anziano di Yip Man:
      William Cheung, Grande Maestro del nostro stile.
    </p>
    <img
      src="../../assets/StoriaFinoWilliamCheung.jpeg"
      alt="Praticanti di Wing Chun"
      class="w-full max-w-xs mx-auto rounded-lg shadow-lg object-contain"
    />
    <p>
      In Italia gli insegnamenti del Grand Master William Cheung erano diffusi dal SiFu Gianluca Boccato (allievo anche
      del Grand Master Stephen Lam). Successivamente il Master Gianluca Boccato insegna il suo sistema al Si Fu Luca
      Campiglio che diviene poi allievo diretto del Grand Master William Cheung entrando in famiglia come da
      riconoscimento sottostante. GM William Cheung fa mettere anche il nome del Master Luca Campiglio nella targa che
      si trova all’interno del Tempio di Shaolin in Cina.
    </p>

    <img
      src="../../assets/RiconoscimentoUfficiale.jpeg"
      alt="Praticanti di Wing Chun"
      class="w-full max-w-xs mx-auto rounded-lg shadow-lg object-contain"
    />

    <!-- Nota sulla trascrizione -->
    <h2 class="text-red-600 font-bold text-2xl">Nota sulla Trascrizione</h2>
    <p>
      È stata adottata la trascrizione in caratteri occidentali Wing Chun perché fu la prima diffusa negli anni ’50 ad
      Hong Kong come “traduzione” fonetica dal Cantonese all’inglese. Oggi molte scuole per distinguersi usano chiamare
      lo stesso metodo con la trascrizione Ving Tsun, Ving Chun, Wing Tzun ecc. ma fanno tutte capo alla stessa arte
      marziale.
    </p>
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
        Fammi conoscere le palestre
      </router-link>
    </div>

    <p class="text-center text-gray-600 mt-4">Capitolo origini e Trascrizione da tuttocina.it</p>
  </div>
</template>

<script>
export default {
  name: "StoriaWingChun",
};
</script>
9
