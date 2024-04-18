<script lang="ts" setup></script>

<template>
  <div class=" "> 
    <el-affix :offset="0">
      <HeaderComponent />
    </el-affix> 
      <main class="min-h-screen  from-[#020420] bg-slate-600  right-0 left-0 bg-cover   object-cover " style="background-image: url('/logofoot/_2a3e3d83-f605-4562-8ff6-15f5ba68796b.jpg')" >
        <div class=" relative w-full ">
          <slot></slot>
        </div>
      </main>
      <!-- <FooterComponent /> -->
    </div>
</template>
<style scoped></style>
