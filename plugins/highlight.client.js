import hljs from 'highlight.js/lib/core'
import cpp from 'highlight.js/lib/languages/cpp'
import highlightJS from '@highlightjs/vue-plugin'
import 'highlight.js/styles/atom-one-dark.css'

export default defineNuxtPlugin((nuxtApp) => {
    hljs.registerLanguage('cpp', cpp)
    nuxtApp.vueApp.use(highlightJS)
})
