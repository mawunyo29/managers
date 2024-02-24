export default defineNuxtRouteMiddleware((to, from) => {
    
    const auth = useAuthStore() as any
   
    if (!auth.isAuthentificated ) {
        console.log('no token');
        return navigateTo('/') 
    }
    
})
