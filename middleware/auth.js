import {useMainStore} from "~/store/index.js";
import {useNuxtApp} from "#app";

export default defineNuxtRouteMiddleware((to, from) => {

    if (process.server) {
        const {req, res} = useNuxtApp().ssrContext?.event.node;
        const authCookie = req.headers.cookie ? req.headers.cookie.split('; ').find(c => c.startsWith('token=')) : null;
        if (!authCookie) {
            return navigateTo('/login');
        }
    } else {
        const store = useMainStore();
        if (!store.isAuthenticated) {
            return navigateTo('/login')
        }
    }
})