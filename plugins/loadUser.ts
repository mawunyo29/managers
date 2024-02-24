export default defineNuxtPlugin( async(nuxtApp) => {
    const auth = useAuthStore() 
    if(!auth.isAuthentificated){
        await auth.fetchUser()
    }
})
