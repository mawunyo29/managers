import type { UseFetchOptions } from 'nuxt/app'
export function useApiFetch<T>( path:string , options:UseFetchOptions <T>= {}) {
  let  headers:any = {
    accept: 'application/json',
    referer: 'http://localhost:3000',
  }

  const token = useCookie('XSRF-TOKEN')
    if(token){
        headers['X-XSRF-TOKEN'] = token
    }
    if(process.server){
       headers = {
        ...headers,
        ...useRequestHeaders(['cookie'])
        }
    }
    
   try {
    return useFetch(`/backend${path}`, {
      credentials: 'include',
      ...options,
      watch:false,
      headers: {
        ...headers,
        ...options?.headers
      },
      
    
      // transform: (input) => {
      //   return {
      //     ...input  as T,
      //     fetchAt: new Date().toISOString()
      //   }
      // },
      // getCachedData : (key) => {
      //  const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      //  if(!data) return
      //  const expirationDate = new Date(data?.fetchAt)
      //   expirationDate.setTime(expirationDate.getTime() + 1000 * 60 * 60 * 24)
      //   if(expirationDate < new Date()){
      //     return
      //   }
      //   return data
      // },
    })
   } catch (error) {
       console.log('error')
   }

}
