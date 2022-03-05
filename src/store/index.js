import { createStore } from 'vuex'

export default createStore({
  state: {
    currentReadMoreData: null
  },
  getters: {
    isReadMoreActive(state) {
      return state.currentReadMoreData !== null
    },
    readMoreData(state) {
      return state.currentReadMoreData
    }
  },
  mutations: {
    setActive(state, data) { state.currentReadMoreData = data },
    setInactive(state) { state.currentReadMoreData = null }
  },
  actions: {
    setActive(context, data) { context.commit('setActive', data) },
    setInactive(context) { context.commit('setInactive') }
  },
  modules: {
  }
})
