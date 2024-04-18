<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  dataInput: {
    type: Object,
    required: true
  },
  rules: {
    type: Object,
    required: true
  },
  labelPosition: {
    type: String,
    default: 'top'
  }
})
const input = ref([])
const emit = defineEmits(['submit'])
const submit = () => {
  const valid = input.value.validate();
  if (valid) {
    emit('submit', props.dataInput)
  } else {
    console.log("error submit!!");
    return false;
  }
};
const reset = () => {
  console.log(input.value);

  if (input.value !== undefined) {
    input.value?.resetFields();
  }
};
const scopeInputType = (type) => {
  if (type === "text" || type === "email" || type === "password") {
    return true;
  }
  return false;
};


</script>

<template>
  <UContainer  class="flex flex-col items-center justify-center px-6 pt-8 mx-auto sm:-ml-4 md:h-screen pt:mt-0 dark:bg-gray-900">
    <div
      class=" sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto  w-full md:flex items-center justify-start">
      <el-card class="w-full max-w-xl p-6 space-y-8 bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800" shadow="hover">
        <div class="card-header text-center text-xl font-medium mb-4">
          <span>{{ title }}</span>
        </div>
        <el-form :model="dataInput" :rules="rules" ref="input" label-width="80px" :label-position="labelPosition">
          <el-row>
            <el-col :span="24">
              <template v-for="(item, index) in dataInput" :key="index">
                <el-form-item :label="item.label" :prop="item.prop">
                  <template v-if="item.is_visible">
                    <el-input v-if="scopeInputType(item.type)" v-model="item.value" :placeholder="item.placeholder"
                      :type="item.type" />
                    <client-only>
                      <el-select v-model="item.value" placeholder="Select" clearable v-if="item.type === 'select'">
                        <el-option v-for="(option, optionIndex) in item.options" :key="optionIndex" :label="option.label"
                          :value="option.value"></el-option>
                      </el-select>
                    </client-only>
                    <el-checkbox v-if="item.type === 'checkbox'" v-model="item.value"></el-checkbox>
                  </template>
                </el-form-item>
              </template>
            </el-col>
          </el-row>
        </el-form>
        <template #footer>
          <div class="flex justify-end">
            <div>
              <base-button type="submit" @click.prevent="submit" label="Submit" color="primary" size="sm" rounded="" classes=""/>
              <base-button type="reset" @click="reset" label="Reset" color="secondary" size="sm" rounded="" classes=""/>
            </div>
          </div>
        </template>
      </el-card>
    </div>
  </UContainer>
</template>

<style scoped></style>
