<script setup>
// import { useAuthStore } from "@/store/auth";
const props = defineProps(['isOpen'])
const emit = defineEmits(['update:isOpen'])

const isOpen = computed	({
  get: () => props.isOpen,
  set: (value) => {
    console.log('set', value);
    emit('update:isOpen', value)
  }
})
const auth = useAuthStore();
const currentUser = ref(auth.user);
const logout = async() => {
  await auth.handleLogout();
  isOpen.value = false;
  return navigateTo({ path: "/" , replace: true});

};
onUnmounted(() => {
  isOpen.value = false;
});
</script>
<template>
  <div
    class="z-50 my-4 text-base  absolute top-16 right-0 list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
    id="dropdown-2"
  :class="{'hidden':!isOpen}">
    <div class="px-4 py-3" role="none" v-if="auth.isAuthenticated">
      <p class="text-sm text-gray-900 dark:text-white" role="none">
        {{ currentUser?.first_name }}
      </p>
      <p
        class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
        role="none"
      >
        {{ currentUser?.email }}
      </p>
    </div>
    <ul class="py-1" role="none">
      <li>
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
          >Dashboard</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
          >Settings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem"
          >Earnings</a
        >
      </li>
      <li >
        <template v-if="auth.isAuthenticated">
          <button
            type="button"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
            role="menuitem"
            @click="logout"
            >Log out
          </button>
        </template>

        <template v-else>
          <NuxtLink
            to="/login"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
            >Login
          </NuxtLink>
        </template>
      </li>
    </ul>
  </div>
</template>
