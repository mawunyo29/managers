type User = {
    id: number
    name: string
    email: string
}
type token = {
    token: string
}

export const useAuthStore = defineStore('authConnect', () => {
    const user =  ref<User | null>(null)
    const token = ref<token | null>(null)
    const isAuthentificated = computed(() => {
        return !!user.value
    })
    const authToken = computed(() => {
        return token.value
    })
    const { authentificate, options} = useAuth()
    const { scrfToken, getScrfToken } = useScrfToken()
    const fetchUser = async () => {
       const {data} = await useApiFetch('/api/user')
       user.value = data.value as User
    }
    const authentificateHandler = async (requestData: any) => {
        getScrfToken("/sanctum/csrf-cookie")
        const cookie = scrfToken('XSRF-TOKEN')
        options.value = {
            headers: {
                Accept: "application/json",
                'X-Requested-With': 'XMLHttpRequest',
                'X-XSRF-TOKEN': cookie
            }
        }
   
       const login = await authentificate(`/api/login`, requestData)
       const $vallue = login.data.value as any
         token.value = $vallue?.token as token
        await fetchUser()
        
       return login
       

    }
    return {
        user,
        authentificateHandler,
        isAuthentificated,
        fetchUser,
        authToken
    }
})