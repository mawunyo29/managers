<script  setup>
const loading = ref(false)
const nuxtPage = useNuxtApp()
const fetchPage = async () => {
  await nuxtPage.hooks.beforeEach((to, from) => {
    loading.value = true
  })

  await nuxtPage.hooks.afterEach((to, from) => {
    loading.value = false
  })
}
watchEffect(() => {
  fetchPage()
})

</script>

<template>
  <div v-if="loading">
    <div class="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          class="animate-spin h-12 w-12 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.09a5.001 5.001 0 00-5 4.429l3 1.3zm10-9.291a8 8 0 00-8 8h4c0-3.327 2.673-6 6-6v-2z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.loading .loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
