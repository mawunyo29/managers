<script lang="ts" setup></script>

<template>
  <div class=" "> 
    <el-affix :offset="0">
      <HeaderComponent />
    </el-affix> 
      <main class="min-h-screen bg-gradient-to-bl from-[#020420] bg-slate-600 flex justify-start items-center right-0 left-0">
        <div class=" relative w-full ">
          <slot></slot>
        </div>
      </main>
      <!-- <FooterComponent /> -->
    </div>
</template>
<style scoped></style>
