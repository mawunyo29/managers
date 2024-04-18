<template>
  <div class="flex items-center max-w-lg mx-auto my-4">
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
      
        <!-- Votre icône de recherche -->
      </div>
      <form @submit.prevent="">
        <input
          type="text"
          id="voice-search"
          v-model="searchQuery"
          @keydown.enter="search(cleanInput(searchQuery))"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos, Design Templates..."
          required
        />
      </form>
      <button
        type="button"
        class="absolute inset-y-0 end-0 flex items-center pe-3"
        @click.prevent="voiceSearch()"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 20"
        >
          <!-- Votre icône de recherche vocale -->
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
          />
        </svg>
      </button>
      <!-- Indicateur visuel pour la recherche vocale -->
      <div
        v-if="listening"
        class="absolute inset-y-0 end-0 flex items-center pr-3 text-gray-500"
      >
        Recherche vocale en cours...
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  searchData: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:searchData"]);

const searchQuery = computed({
  get: () => props.searchData,
  set: (value) => emit("update:searchData", value),
});
let listening = false;

const search = (query) => {
  emit("update:searchData", query);
  searchQuery.value = query;
};

const voiceSearch = () => {
  console.log("Voice search");
  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = "fr-FR";
  recognition.start();
  listening = true; // Indiquer que la recherche vocale est en cours
  recognition.onresult = function (event) {
    const speechToText = event.results[0][0].transcript;
    searchQuery.value = speechToText;
    search(cleanInput(speechToText));
    listening = false; // Indiquer que la recherche vocale est terminée
  };

  recognition.onerror = function (event) {
    console.error("Erreur de reconnaissance vocale :", event.error);
    listening = false; // Indiquer que la recherche vocale est terminée en cas d'erreur
  };

  recognition.onend = function () {
    console.log("Fin de la recherche vocale.");
    listening = false; // Indiquer que la recherche vocale est terminée
  };
};

const cleanInput = (input) => {
  return input.replace(/[,.]$/, ""); // Supprimer les virgules et les points à la fin de la chaîne
};
</script>

<style scoped>
/* Vos styles CSS */
</style>
