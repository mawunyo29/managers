export const useScrfToken = () => {
  const scrfToken = (name: string) => {
    return useCookie(name, { default: () => '' }).value
  }
  const getScrfToken = async (url: string) => {
    return await useFetch(`/backend${url}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',

      },
    })
  }
  
  //return { getScrfToken }
  return {
    getScrfToken,
    scrfToken
  }
}
