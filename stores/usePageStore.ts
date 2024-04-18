type Menu = {
    id: number;
    title: string;
    url: string;
    order: number;
    parent: number;
    children: Menu[];
}
export const usePageStore = defineStore('storePage', () => {
    const storePage = ref('storePage');
    const menus = ref<Menu[]>([]);
    const setStorePage = (page: string) => {
        storePage.value = page;
    };
    const fetchMenus = async () => {
        try {
            menus.value = (await useApiFetch<Menu>("/api/menus"))?.data.value as Menu[];
        }
        catch (error) {
            console.log(error);
        }
    }
    return {
        storePage,
        setStorePage,
        fetchMenus,
        menus
    };
});