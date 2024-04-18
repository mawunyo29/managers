import { defineStore } from 'pinia';

type Badge = {
    ref: string;
    id: string;
   
};
export const useBadgeStore = defineStore('badge', () => {
    const badge = ref<Badge | null>(null);
    const fetchBadge = async () => {
        const response = await useApiFetch('/api/badges', { method: 'GET' });
        badge.value = response?.data.value as Badge;
        console.log('badge', badge.value);
    };
    const storeBadge = async (data:any) => {
        const response = await useApiFetch('/api/badges', {
            method: 'POST',
            body: data,
        });
        badge.value = response?.data.value as Badge;
        console.log('badge', response);
        return response;
    };
    return {
        badge,
        fetchBadge,
        storeBadge,
    };
}
);