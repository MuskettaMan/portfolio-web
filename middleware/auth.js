import {useMainStore} from "~/store/index.js";

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useMainStore();
    const {req, res} = useNuxtApp().ssrContext?.event.node;

    if (process.server) {
        const authCookie = req.headers.cookie ? req.headers.cookie.split('; ').find(c => c.startsWith('token=')) : null;

        // Check if the authentication cookie exists
        if (!authCookie) {
            return navigateTo('/login');
        }
    } else {
        if (!store.isAuthenticated) {
            return navigateTo('/login')
        }
    }
})