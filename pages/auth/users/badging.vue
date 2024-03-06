<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
  middleware: 'auth',
  path: '/auth/users/:name/badging',
  key: (route) => route.fullPath,

})
const auth = useAuthStore()
const title = 'Badging';
useHead({
  title,
  meta: [
    {
      name: 'Badging',
      content: 'Badging'
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: 'Badging'
    }
  ]
})
const badginInfo = ref(null)
//get a local date time
const dateTime = ref(false)
const badgingStartime = computed(() => {
  return new Date().toLocaleString()
})
const getBadging = async () => {
  dateTime.value = true
 
}
</script>

<template>
  <div class="p-2 space-y-2">
    <h1>Badging </h1>
    <p>Badging is a process of recording the time of arrival and departure of employees in the workplace. It is a method
      of tracking the attendance of employees in the workplace. It is a process of recording the time of arrival and
      departure of employees in the workplace. It is a method of tracking the attendance of employees in the workplace.
    </p>
    <button class="px-4 py-2 outline-amber-400 ring w-20 rounded flex items-center justify-center bg-amber-400 text-white hover:bg-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none transition duration-150 ease-in-out"
      @click="getBadging">
      <p class=" max-w-fit"><Icon name="lucide:clock" size="24" /></p>
    </button>
    <div v-if="dateTime">
      <p>Badging Startime: {{ badgingStartime }}</p>
    </div>
  </div></template>

<style scoped></style>
