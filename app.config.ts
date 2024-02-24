// Importer le module dotenv pour charger les variables d'environnement depuis le fichier .env
export default defineAppConfig({
    // // Configuration des variables d'environnement
  
    // runtimeConfig: {
    //     // Will be available on both server and client
    //    public:{
    //         baseURL: process.env.BASE_URL || 'http://localhost:3000',
    //         // Will be only available on the server-side
    //         secretKey: process.env.SECRET_KEY,
    //         apiURL: process.env.BASE_API_URL,
    //    }
    // },
    // css: [
    //     // Charger un fichier CSS global
    //     '@/assets/css/main.css',
    // ],

    // Configuration des thèmes
    // Vous pouvez définir plusieurs thèmes et les utiliser dans vos composants
    // Pour plus d'informations, consultez la documentation de Nuxt.js sur les thèmes
    // https://nuxtjs.org/docs/2.x/features/theming
    theme: {
        themes: {
            light: {
                primary: '#ff0000',
                secondary: '#00ff00',
                // Ajoutez ici d'autres couleurs pour le thème light
            },
            dark: {
                primary: '#0000ff',
                secondary: '#ffff00',
                // Ajoutez ici d'autres couleurs pour le thème dark
            },
            
        },
    },
    
})
