export const useAuth = () => {
 const auth:any =ref({})
  const options:any = {}
  let headers:any = {}
 
 const authUser = useState('auth')
  const {scrfToken} = useScrfToken()
  const token = scrfToken('XSRF-TOKEN')
    if(token){
        headers = {
        'X-XSRF-TOKEN': token
        }
    }
    if(process.server){
       headers = {
        ...headers,
        ...useRequestHeaders(['referer' ,'cookie'])
        }
    }
 
  const  authentificate = async (url:string , data:any) => {
   let response = await useFetch(`/backend${url}`, {
      credentials: 'include',
      method: 'POST',
      body: data,
      watch:false,
      headers: {
        ...headers,
        ...options?.headers
      },
    })
    authUser.value = response.data
    auth.value = authUser || {}
  //   const userauthy =  await useApiFetch('/api/user')
  //  console.log('auth' , 'au',userauthy);
   
    return response
  }
  const logout = async (url:string) => {
    return await useFetch(`/backend${url}`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        ...headers,
        ...options?.headers
      },
    })
  }
  const register = async (url:string , data:any) => {
    return await useFetch(`/backend${url}`, {
      credentials: 'include',
      method: 'POST',
      body: data,
      headers: {
        ...headers,
        ...options?.headers
      },
    })
  }
  return {
    authentificate,
    logout,
    register,
    options,
    auth
  }
}
