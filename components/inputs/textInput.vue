<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  labelId: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);


const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => updateValue(value),
});

const randomId = () => Math.random().toString(36).substring(2);
 const labelId = props.labelId || randomId();

const inputs = ref([]);
const badges = ref([{ value: "" }]);
const addNew = () => {
  badges.value.push({ value: "" });
  
};
const removeBadge = (index) => {
  badges.value.splice(index, 1);
};
const dataToStore =() => {
  emit("update:modelValue", badges.value);
};
</script>

<template>
  <div ref="inputs" v-for="(nextinput ,index ) in  badges" :key="nextinput" class="w-full">
    <label
      :for="labelId"
      class="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >{{ label }} {{ index + 1 }}
    </label>
    <div class="flex justify-items-center items-center space-x-2 w-full" >
      <input
        type="text"
        :id="labelId"
        v-model="nextinput.value"
        @blur="dataToStore"
        :required="required"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
      />
      <template v-if="icon">
        <div class="flex items-center space-x-2 mx-1">
        <button class="focus:outline-none rounded-sm ring-0 ring-slate-500 flex-grow" type="button" @click="addNew()" v-if="index == 0">
        <Icon :name="icon" class="h-5 w-5 dark:text-gray-500"  />
        </button>
        <button class="focus:outline-none rounded-sm ring-0 ring-slate-500 flex-grow" type="button" @click="removeBadge(index)" v-if="index > 0" >
        <Icon name="i-heroicons-minus" class="h-5 w-5 dark:text-gray-500"  />
        </button>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
