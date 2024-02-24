<script setup lang="ts">
const route = useRoute()
definePageMeta({
  layout:'guest',
  title: 'Home',
})
</script>

<template>
  <div>
    <Login/>
    <el-backtop :bottom="100" class=" ">
    <div
      style="
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
      class="h-10 w-10 rounded-full flex justify-center items-center ring-2 ring-lime-200  "
    >
    <Icon name="lucide:chevron-up" size="30" />
    </div>
  </el-backtop>
  </div>
</template>
