<script lang="ts" setup>
definePageMeta({
  title: "user-dashboard",
  auth: true,
  name: "user-dashboard",
  layout: "auth",
  alias: "/user/dashboard",
  middleware: ["auth"]
});
</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
