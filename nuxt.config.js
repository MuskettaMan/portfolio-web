import slugify from "slugify";
import axios from "axios";

export default defineNuxtConfig({
    content: {
        highlight: {
            theme: 'one-dark-pro',
            preload: [
                'cpp'
            ]
        }
    },
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
        '@pinia/nuxt', '@nuxt/content'
    ],
    build: {
        transpile: ['@fortawesome/vue-fontawesome']
    },
    ssr: true,
    hooks: {
        async 'nitro:config'(nitroConfig) {
            const articles = (await axios.get('https://ferri.dev/api/articles')).data.data;

            const slugs = articles.map(article => `/article/${slugify(article.title, {lower: true})}`);
            nitroConfig.prerender.routes.push(...slugs);
        }
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Ferri.dev'
        }
    }
})
