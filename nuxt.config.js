// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/_globalStyle.scss" as *;\n'
                }
            }
        }
    },
    modules: [
        '@pinia/nuxt'
    ],
    build: {
        transpile: ['@fortawesome/vue-fontawesome']
    },
})
