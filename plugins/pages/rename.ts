export default defineNuxtPlugin((nuxtApp) => {
    //rename the route name in defined pages 
    
    const auth = useAuthStore()
    //route params
    const route = useRoute().params
    //rename the route name
    if(route.slug){
       route.name = route.slug
    }
})
