
<script  setup>
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'
definePageMeta({
  layout: 'auth',
  name: 'Badging',
  path: '/auth/users/:name/badging',
  key: (route) => route.fullPath,
  title: 'Badging',
  description: 'Badging',
  keywords: 'Badging',
  middleware: 'auth'

})

const counter = useState('count', () => 0)
const {auth} = useAuthStore()
const title = 'Badging';
const { x, y } = useMouse()
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
const badginInfo = ref({})
//get a local date time
const dateTime = ref(false)
const badgingStartimes = ref([])
const getBadging = async () => {
  dateTime.value = true
  counter.value++
  nextTick(() => {
    //first time
    if (counter.value % 2 === 1) {
      badginInfo.value.badgingStartime = new Date().toLocaleString()
      badgingStartimes.value.push(badginInfo.value.badgingStartime)
      badginInfo.value.status = 'in'
    } else {
      badginInfo.value.badgingEndtime = new Date().toLocaleString()
      badginInfo.value.status = 'out'
    }
  })
  
}
const pickerOptions = {
  shortcuts: [
    {
      text: 'Today',
      onClick(picker) {
        picker.$emit('pick', new Date());
      }
    },
    {
      text: 'Yesterday',
      onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        picker.$emit('pick', date);
      }
    },
    {
      text: 'A week ago',
      onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', date);
      }
    }
  ]
}
let localTimes = ref(0)
const localTime = computed(() => {
  setTimeout(() => {
    localTimes.value= new Date()
  }, 1000)
  return localTimes.value.toLocaleString()
})
//fin de la journée à 18h00

const minTimeToPicckDayly = new Date().setHours(8, 0, 0, 0)
const isDark = usePreferredDark()
const isDarkMode = ref(isDark)
watch(isDark, (value) => {
  isDarkMode.value = value
})
const isDarkTheme = computed(() => {
  return isDarkMode.value ? 'dark' : 'light'
})
const maxTimeToPickDaily = new Date(new Date().setHours(17, 59, 59, 999))
const t = ref(0)

const getBadgingTime = computed(() => {
 if( badgingStartimes.value[0]){
  setTimeout(() => {
    t.value = maxTimeToPickDaily.getTime() - new Date().getTime()
  }, 1000)
  const remainingTime = new Date(t.value)
  const hours = remainingTime.getUTCHours()
  const minutes = remainingTime.getUTCMinutes()
  const seconds = remainingTime.getUTCSeconds()
  return { hours, minutes, seconds }
 }
})



</script>

<template>
  <div class="grid gap-4 px-4 mb-4 md:grid-cols-2 xl:grid-cols-4">
   
    <small-card>
      <template #cardHeader>
        <h3>time:</h3>
      </template>
      <h1 v-if="badginInfo.badgingStartime">Badging {{ isDarkTheme }} {{ getBadgingTime.hours}}:h {{ getBadgingTime.minutes}}:mn {{ getBadgingTime.seconds}}:s</h1>
      <div class="rounded overflow-hidden w-full h-full">
      <p class="warning rounded overflow-hidden">Badging is a process of recording the time of arrival and departure of employees in the workplace. It is a method
      of tracking the attendance of employees in the workplace. It is a process of recording the time of arrival and
      departure of employees in the workplace. It is a method of tracking the attendance of employees in the workplace.
    </p>
    </div>
      <template #cardFooter>
        <p>Badging</p>
      </template>
    </small-card>
    
   <div class="p-4 mb-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
     <button class="px-4 py-2 w-full outline-amber-400 ring  rounded flex items-center justify-center  text-white group  focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none transition duration-150 ease-in-out"
      @click="getBadging">
      <Icon name="lucide:clock" size="100" class="text-blue-500 group-even:hover:text-white" />
    </button>
    <div v-if="dateTime" class="relative w-full focus:outline-none text-gray-900 dark:text-white">
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 h-10 w-full ">
        <div class="absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none">

        </div>
        <span class="relative inline-flex items-center justify-center flex-shrink-0 w-full focus-visible:outline-0 focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out " v-if="badginInfo.status==='in'">
          <p class="h-8 px-3 textsm font-medium rounded-md text-blue-500 dark:text-white">{{badginInfo.status}}: {{  badginInfo.badgingStartime }}</p>
        </span>
        <span class="relative inline-flex items-center justify-center flex-shrink-0 w-full focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out" v-if="badginInfo.status==='out'">
          <p class="h-8 px-3 textsm font-medium rounded-md text-blue-500 dark:text-white">{{badginInfo.status}}: {{  badginInfo.badgingEndtime }}</p>
        </span>
      </div>
    </div>
    <div
      class="px-4 py-2 text-gray-400 border border-gray-200  rounded dark:border-gray-600"
    >
     <p class="w-full flex items-center text-center justify-center font-medium ">{{localTime}} </p> 
    </div>
    
   </div>
   
    
  </div>
  </template>

<style scoped></style>
