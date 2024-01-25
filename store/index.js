import cookies from 'js-cookie'
import {defineStore} from "pinia";

export const useMainStore = defineStore('main-store', {
    state: () => {
        return {
            authToken: cookies.get('token') || null,
            user: cookies.get('user') || null
        }
    },
    getters: {
        isAuthenticated: (state) => !!cookies.get('token'),
        token: (state) => cookies.get('token')
    },
    actions: {
        login(token, user, expiresIn) {
            this.setToken(token, expiresIn);
            this.setUser(user);
        },
        logout() {
            this.clearAuth();
        },
        setToken(token, expiresIn) {
            this.authToken = token;

            cookies.set('token', token, {expires: new Date(Date.now() + expiresIn * 1000)});
        },
        setUser(user) {
            this.user = user;

            cookies.set('user', user, {expires: 1});
        },
        clearAuth() {
            this.authToken = null;
            this.user = null

            cookies.remove('token');
            cookies.remove('user');
        }
    },
    modules: {}
})

