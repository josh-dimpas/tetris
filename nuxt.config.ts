// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: [
        '@nuxt/eslint',
        '@nuxt/hints',
        '@nuxt/ui',
        '@bubblesortt/nuxt-es-toolkit',
        '@compodium/nuxt',
        '@kgierke/nuxt-basic-auth',
        '@pinia/nuxt',
        '@vueuse/nuxt',
    ],

    css: ['~/assets/main.css'],

    vite: {
        optimizeDeps: {
            include: ['@vue/devtools-core', '@vue/devtools-kit'],
        },
    },
})
