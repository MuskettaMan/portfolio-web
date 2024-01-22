import {createStore} from 'vuex'
import cookies from 'js-cookie'

export default createStore({
    state: {
        token: cookies.get('token') || null,
        user: cookies.get('user') || null
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        token: (state) => state.token
    },
    mutations: {
        setToken(state, {token, expiresIn}) {
            state.token = token;

            cookies.set('token', token, {expires: new Date(Date.now() + expiresIn * 1000)});
        },
        setUser(state, user) {
            state.user = user;

            cookies.set('user', user, {expires: 1});
        },
        clearAuth(state) {
            state.token = null;
            state.user = null

            cookies.remove('token');
            cookies.remove('user');
        }
    },
    actions: {
        login({commit}, {token, user, expiresIn}) {
            commit('setToken', {token, expiresIn});
            commit('setUser', user);
        },
        logout({commit}) {
            commit('clearAuth');
        }
    },
    modules: {}
})

