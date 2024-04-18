export default defineNuxtRouteMiddleware((to, from) => {
    
     const { isAuthenticated } = useAuthStore()
      console.log('isAuthentificated', isAuthenticated);
     
    if (isAuthenticated ) {
        return navigateTo('/dashboard', { replace: true })
    }

})
