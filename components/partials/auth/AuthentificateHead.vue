<script setup>
// definePageMeta({
//   title: "Dashboard",
//   auth: true,
//   name: "Dashboard",
//   layout: "auth",
//   alias: "/dashboard",
//   middleware: ["auth"]
// });
const isOpen = ref(false);
const appDropDown = ref(null);
const notificationDropDown = ref(null);
const isOpenNotification = ref(false);
const isOpenApp = ref(false);
const auth = useAuthStore();
const currentUser = reactive(auth.user);
const openNotification = () => {
  isOpenNotification.value = !isOpenNotification.value;
  console.log("openNotification", isOpenNotification.value);
};
const openApps = () => {
  isOpenApp.value = !isOpenApp.value;
};
const openToggle = () => {
  isOpen.value = !isOpen.value;
  console.log("openToggle", isOpen.value);
};
const primaryColor = computed(() => {
  return currentUser.societies[0]?.primary_color;
});
const secondaryColor = computed(() => {
  return currentUser.societies[0]?.secondary_color;
});
const toggleTheme = () => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  const themeToggle = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");
};
const resolveColorVisibility = (bgColor) => {
 
 //verifie si la couleur de fond est trop proche de la couleur du texte
 if(bgColor){
  const color = bgColor.substring(1);
  const rgb = parseInt(color, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  if (luma < 128) {
    return "#ffffff";
  } else {
    return "#000000";
  }
 }
 

};
onMounted(() => {
  resolveColorVisibility(primaryColor.value, secondaryColor.value);
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    const darkIcon = document.getElementById("theme-toggle-dark-icon");
    const lightIcon = document.getElementById("theme-toggle-light-icon");
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
  }
});
</script>
<template>
  <nav
    class="fixed z-30 w-full  border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 current-society-color current-socety-text-primary" :class="{'shadow-sm': isOpen}"
  >

    <div class="px-3 py-3 lg:px-5 lg:pl-3 relative">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            id="toggleSidebarMobile"
            aria-expanded="true"
            aria-controls="sidebar"
            class="p-2  rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              id="toggleSidebarMobileHamburger"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              id="toggleSidebarMobileClose"
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <a href="#" class="flex ml-2 md:mr-24">
            <!-- <img src="/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" /> -->
            <template v-if="currentUser?.societies[0]?.logo">
              <img
                :src="currentUser?.societies[0]?.logo"
                class="h-8 mr-3"
                :alt="currentUser?.societies[0]?.name ?? 'THE GOAL'"
              />
            </template>
            <template v-else>
              <svg
                class="w-8 h-8 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </template> 
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
              >{{currentUser.societies[0]?.name ?? 'THE GOAL'}}
            </span>
          </a>
          <form action="#" method="GET" class="hidden lg:block lg:pl-3.5 mx-8">
            <label for="topbar-search" class="sr-only">Search</label>
            <div class="relative mt-1 lg:w-96">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div class="flex items-center">
          <div class="hidden mr-3 -mb-1 sm:block">
            <a
              class="github-button"
              href="https://github.com/themesberg/flowbite-admin-dashboard"
              data-color-scheme="no-preference: dark; light: light; dark: light;"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star themesberg/flowbite-admin-dashboard on GitHub"
              >Star</a
            >
          </div>
          <!-- Search mobile -->
          <button
            id="toggleSidebarMobileSearch"
            type="button"
            class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span class="sr-only">Search</span>
            <!-- Search icon -->
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <!-- Notifications -->
          <button
            @click="openNotification()"
            type="button"
            data-dropdown-toggle="notification-dropdown"
            class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 .dropdown"
            ref="notificationDropDown"
          >
            <span class="sr-only">View notifications</span>
            <!-- Bell icon -->
            <svg
              class="w-6 h-6 .dropdown"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
              ></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <user-notification
            :notification="notificationDropDown"
            @update:notificaiton="openNotification"
            :isOpenNotification="isOpenNotification"
          />
          <!-- Apps -->
          <button
            @click="openApps()"
            type="button"
            data-dropdown-toggle="apps-dropdown"
            class="hidden p-2 text-gray-500 rounded-lg sm:flex hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            ref="appDropDown"
          >
            <span class="sr-only">View notifications</span>
            <!-- Icon -->
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <app-card
            :isOpen="isOpenApp"
            :toggleEvent="appDropDown"
            @update:isOpen="openApps()"
          />
          <button
            @click="toggleTheme" id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" class="text-primary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none  dark:focus:ring-gray-700 rounded-lg text-sm p-2.5  ml-3">
            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="theme-toggle-light-icon" class=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </button>
          <div
            id="tooltip-toggle"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Toggle dark mode
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <!-- Profile -->
          <div class="flex items-center ml-3">
            <div>
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button-2"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-2"
                @click="openToggle"
              >
                <span class="sr-only">Open user menu</span>
                <template v-if="currentUser?.photoURL">
                  <img
                    class="w-8 h-8 rounded-full"
                    :src="currentUser.photoURL"
                    alt="user photo"
                  />
                </template>
                <template v-else>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </template>
              </button>
            </div>
            <!-- Dropdown menu -->
            <auth-state :isOpen="isOpen" @update:is-open="openToggle" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.current-society-color {
  background-color: v-bind('primaryColor');
}
.current-socety-text-primary {
  color: v-bind('resolveColorVisibility(primaryColor)');
}
.bg-dark {
  background-color: #1a202c;
}

</style>
