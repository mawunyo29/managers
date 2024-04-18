type booleal = boolean;
export const useLoaded = defineStore('loaded', () => {
    const isLoading = ref(false);
    const setIsLoading = (state:booleal) => {
        isLoading.value = state;
    };
    return {
        isLoading,
        setIsLoading
    };
});