<script lang="ts" setup></script>

<template>
  <div
    class="p-4 mb-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
  >
    <div
      class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"
    >
      <slot name="cardHeader"></slot>
    </div>
    <div
      class="h-32 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"
    >
    <slot />
    </div>
    <div
      class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"
    >
      <slot name="cardFooter"></slot>
    </div>
  </div>
</template>

<style scoped></style>
