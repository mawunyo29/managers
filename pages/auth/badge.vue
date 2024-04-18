<script  setup>
definePageMeta({
  title: "Badge",
  description: "Badge",
  name: "Badge",
  layout: "auth",
  keywords: "Badge",
  alias: "/badge",
  middleware: 'auth',
});

</script>

<template>
  <div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
    <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-gray-800 w-1/2">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Badge</h2>
    </div>
   
  </div>
  </div>
  
</template>

<style scoped></style>
