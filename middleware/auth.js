import {useMainStore} from "~/store/index.js";

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useMainStore();
    if (!store.isAuthenticated) {
        return navigateTo('/login')
    }
})