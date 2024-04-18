<script setup>
definePageMeta({
  title: "Badge",
  description: "Badge",
  name: "Badge Assignment",
  layout: "auth",
  keywords: "Badge assignment",
  alias: "/add/badge",
  middleware: "auth",
});
const dataBadgeStore = ref([]);
const formBadge = new FormData();
const {storeBadge ,fetchBadge} =useBadgeStore();
const {data:badges ,execute} = await useAsyncData('badges',async() => await storeBadge(dataBadgeStore.value),
{immediate:false});

const badgeForm = reactive({
  badge: {
    label: "Badge",
    prop: "badge",
    value: "",
    placeholder: "Badge",
    type: "text",
    is_visible: true,
  },
  user: {
    label: "User",
    prop: "user",
    value: "",
    placeholder: "User",
    type: "text",
    is_visible: true,
  },
});
const rules = reactive({
  badge: [{ required: true, message: "Please input badge", trigger: "blur" }],
  user: [{ required: true, message: "Please input user", trigger: "blur" }],
});
const submit = async () => {
  
  console.log(formBadge);
  execute();
};

const getBadges =(dataStore) => {
  if(dataStore.badge){
    formBadge.append('badge',dataStore);
    dataBadgeStore.value.push(dataStore);
  }

};
</script>

<template>
  <div>
    <pre>{{ badges }}</pre>
    <div
      class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-gray-800 sm:w-1/3 w-full"
    >
      <h1 class="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Badge Assignment
      </h1>
      <p class="text-gray-600 dark:text-gray-400">Assign a badge to a user</p>
      <div class="mt-4">
        <form class="w-full flex flex-col">
            <div class="grid gap-4 md:grid-cols-1">
              <text-input
                label="Badge"
                labelId="badge"
               :modelValue="badgeForm.badge.value"
               @update:modelValue="getBadges"
                icon="i-heroicons-plus-solid"
                required
              />
            </div>
            
          <div class="mt-4">
            <base-button
              type="submit"
              @click.prevent="submit"
              label="Submit"
              rounded="rounded-md"
              size="sm"
              color=""
              classes="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 outline outline-slate-200"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
