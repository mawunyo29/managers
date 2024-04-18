<script lang="ts" setup>

const {data, error} = useFetch('/api/users')
definePageMeta({
    layout: 'auth',
    middleware: 'auth',
    path: '/auth/users/:slug',
    key: (route) => route.fullPath,
   
})
const route = useRoute()
useHead({
    title: 'Users',
    meta: [
        {
            name: route.params.slug.toString(),
            content: 'Users'
        }
    ]
})

</script>
<template>
  <div>
   {{ $route.params.slug }}
   {{ data }}
   {{ error }}
   
   {{ route.name }}
  </div>
</template>

<style scoped></style>
