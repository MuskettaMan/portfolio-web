import slugify from "slugify";
import axios from "axios";

export default defineNuxtConfig({
    content: {
        highlight: {
            theme: 'one-dark-pro',
            preload: [
                'cpp', 'wgsl', 'cmake'
            ]
        }
    },

    devtools: {enabled: true},

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    vite: {
        server: {
            fs: {
                allow: ['.'] // Allows access to the root directory
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/_globalStyle.scss" as *;\n'
                }
            }
        }
    },

    modules: [
        '@pinia/nuxt', '@nuxt/content', '@tresjs/nuxt'
    ],

    tres: {
        devtools: true
    },

    build: {
        transpile: ['@fortawesome/vue-fontawesome']
    },

    ssr: true,

    hooks: {
        async 'nitro:config'(nitroConfig) {
            const articles = (await axios.get('https://ferri.dev/api/articles')).data.data;
            const projects = (await axios.get('https://ferri.dev/api/projects')).data.data;

            const articleSlugs = articles.map(article => `/article/${slugify(article.title, {lower: true})}`);
            const projectSlugs = projects.map(project => `/project/${slugify(project.title, {lower: true})}`);
            nitroConfig.prerender.routes.push(...articleSlugs);
            nitroConfig.prerender.routes.push(...projectSlugs);
        }
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Ferri.dev'
        }
    },

    compatibilityDate: '2025-01-27'
})