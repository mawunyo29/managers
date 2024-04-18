export default defineNuxtRouteMiddleware((to, from) => {
    const nuxtApp = useNuxtApp()
    //set dynamic layout when user is authenticated
    
const {user , isAuthenticated} = useAuthStore()

console.log('user toi', user);

    
if (user && to.path === '/') {
    return navigateTo('/dashboard', { replace: true })
}

// Si l'utilisateur n'est pas authentifié et qu'il tente d'accéder à une page autre que la page de connexion, redirigez-le vers la page de connexion
if (!user && to.path !== '/') {
    return navigateTo('/', { replace: true })
}
    
})
