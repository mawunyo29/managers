<script lang="ts" setup>

const {data, error, isValidating} = useFetch('/api/users')
definePageMeta({
    layout: 'auth',
    middleware: 'auth',
    path: '/auth/users/:slug',
    key: (route) => route.fullPath,
   
})
const route = useRoute()
useHead({
    title: 'Users',
    name: route.params.slug,
    meta: [
        {
            name: route.params.slug,
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
   {{ isValidating }}
   {{ route.name }}
  </div>
</template>

<style scoped></style>
