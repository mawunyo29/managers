<script lang="ts" setup>
definePageMeta({
  title: "profile",
  auth: true,
  name: "user-profile",
  layout: "auth",
  alias: "/prifile/",
  middleware: ["auth"]
});
</script>

<template>
  <div>
    <h1>Auth Page</h1>
  </div>
</template>

<style scoped></style>