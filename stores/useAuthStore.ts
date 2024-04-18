type User = {
  id: number;
  name: string;
  email: string;
  token: string;
};
type Token = {
  token: string;
};

type Credentials = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const token = ref<Token | null>(null);
  const isAuthenticated = computed(() => {
    return !!user.value;
  });
  const authToken = computed(() => {
    return token.value;
  });
  useState("user", () => user.value);
  const fetchUser = async () => {
    const response = await useApiFetch("/api/user", { method: "GET" });
    user.value = response?.data.value as User;
    console.log("user", user.value);
    
  };
  const authentificateHandler: (credentials: Credentials) => Promise<any> = async (credentials: Credentials) => {
    await useApiFetch("/sanctum/csrf-cookie");
    const login = await useApiFetch(`/api/login`, {
      method: "POST",
      body: credentials,
    });
    // const { data, status } = await authentificate(`/api/login`, formData)
    await fetchUser();

    return login;
  };
  const handleLogout = async () => {
    await useApiFetch("/api/logout", { method: "POST" });
    user.value = null;
    token.value = null;
  };
  const users = ref<User[]>([]);
  const fetchUsers = async (query: any) => {
    const response = await useApiFetch("/api/users", {
      method: "GET",
      query: query,
    });
    return response;
  };

 
  return {
    user,
    authentificateHandler,
    isAuthenticated,
    fetchUser,
    authToken,
    handleLogout,
    users,
    fetchUsers,
   
  };
});
if ((import.meta as any).hot) {
  (import.meta as any).hot.accept(
    acceptHMRUpdate(useAuthStore, (import.meta as any).hot)
  );
}
