<template>
  <div class=" ">
    <el-affix :offset="0">
      <slot name="header">
    </el-affix>
    <main class="min-h-full bg-gradient-to-bl from-[#020420] bg-slate-600">
      <div class=" relative top-1/2">
        <slot></slot>
      </div>
    </main>
    <slot name="footer">
  </div>
</template>
<style scoped></style>