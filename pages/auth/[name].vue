<script lang="ts" setup>
definePageMeta({
  title: "profile",
  auth: true,
  name: "profile",
  layout: "auth",
  alias: "/auth/:name",
  middleware: ["auth"]
});
</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
