<template>
  <div class="max-w-4xl mx-auto p-6 text-gray-700 space-y-6">
    <!-- Titolo principale -->
    <h1 class="text-red-600 font-bold text-5xl">Storico delle Foto</h1>
    <p>
      Attraverso il bottone qui sotto è possibile andare al sito storico con tutte le foto della nostra palestra
      (include foto di esami, eventi, training camp, stage e lezioni)
    </p>
    <p>
      <a
        href="https://www.ctd-wingchun-academy.it/foto/"
        target="_blank"
        rel="noopener noreferrer"
        class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Vai al sito storico con tutte le foto 📸
      </a>
    </p>

    <img
      src="../assets/FotoPerFotoStorico.jpg"
      alt="Ip Man in allenamento"
      class="w-full mx-auto rounded-lg shadow-lg object-contain"
    />
    <p class="text-center text-gray-600 mt-4">Foto scuola Winchun presa del nostro storico</p>
  </div>
</template>

<script>
export default {
  name: "StoriaWingChun",
};
</script>
