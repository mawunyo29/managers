<template>
  <nav class="fixed z-50 w-full bg-[#020420]/30 border-b border-gray-200 sm:py-2 dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-bl from-[#020420]/60 text-white">
  <div class="container py-3 mx-auto">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start">
        <a href="#" class="flex mr-4">
          <!-- <img src="/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> -->
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">THE GOAL</span>
        </a>
        <div class="hidden sm:flex sm:ml-6">
          <ul class="flex space-x-8">
            <li>
                <NuxtLink to="/" class="text-sm font-medium  hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500" aria-current="page">Home</NuxtLink>
            </li>
            <li>
              <a href="#"
                class="text-sm font-medium  hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                aria-current="page">Team</a>
            </li>
            <li>
              <a href="#"
                class="text-sm font-medium  hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                aria-current="page">Pricing</a>
            </li>
            <li>
              <a href="#"
                class="text-sm font-medium  hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                aria-current="page">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
       <!--<template v-if="authConect.isAuthenticated">
          <div class="relative" >
            <button @click="open = !open" type="button"
              class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-primary-800"
              id="user-menu" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="w-8 h-8 rounded-full" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png" alt="User avatar" />
            </button>
            <div x-show="open" @click="open = false" class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-700">
              <a href="#" class="block px-4 py-2 text-sm  hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              <a href="#" class="block px-4 py-2 text-sm  hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm  hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              <a href="#" class="block px-4 py-2 text-sm  hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">{{authConect.isAuthenticated ? "Log out" : "Log in"}}</a>
            </div>
          </div>
        </template--> 
        <template v-if="authConect.isAuthenticated">
        <NuxtLink to="/dashboard" class=" dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-500">Dashboard</NuxtLink>
        </template>
        <template v-else>
          <a href="#"
            class="text-white hidden bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
            Login/Register
          </a>
        </template>
       
        <button data-collapse-toggle="mobile-menu" type="button"
          class="inline-flex items-center justify-center p-2 ml-3 text-gray-400 rounded-lg sm:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:hover:bg-gray-700 dark:hover:text-white"
          aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="hidden sm:hidden" id="mobile-menu">
    <ul class="pt-2">
      <li v-if="authConect.isAuthenticated">
          <NuxtLink to="/dashboard" class="block py-2 pl-3 pr-4 text-base font-normal text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white">Dashboard</NuxtLink>
      </li>
      <li>
        <a href="#"
          class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">Team</a>
      </li>
      <li>
        <a href="#"
          class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">Projects</a>
      </li>
      <li>
        <a href="#"
          class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">Calendar
        </a>
      </li>
      <li class="block ">
        <a href="#"
          class="inline-flex items-center w-full px-3 py-2 text-base font-normal text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
          </svg>
          Login/Register
        </a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script setup>
const authConect = useAuthStore();
const dropdownHandler = (event) => {
  let single = event.currentTarget.getElementsByTagName("ul")[0];
  single.classList.toggle("hidden");
};
const MenuHandler = (el, val) => {
  let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0];
  let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
  let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
  if (val) {
      MainList.classList.remove("hidden");
      el.currentTarget.classList.add("hidden");
      closeIcon.classList.remove("hidden");
  } else {
      showIcon.classList.remove("hidden");
      MainList.classList.add("hidden");
      el.currentTarget.classList.add("hidden");
  }
};
// export default {
//   name: "LightWithButton",
//   data() {
//       return {
//           profilePhoto: "https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png",
//       };
//   },
//   methods: {
//       dropdownHandler(event) {
//           let single = event.currentTarget.getElementsByTagName("ul")[0];
//           single.classList.toggle("hidden");
//       },
//       MenuHandler(el, val) {
//           let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0];
//           let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
//           let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
//           if (val) {
//               MainList.classList.remove("hidden");
//               el.currentTarget.classList.add("hidden");
//               closeIcon.classList.remove("hidden");
//           } else {
//               showIcon.classList.remove("hidden");
//               MainList.classList.add("hidden");
//               el.currentTarget.classList.add("hidden");
//           }
//       },
//   },
// };
</script>
