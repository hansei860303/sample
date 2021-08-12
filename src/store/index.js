import { createStore } from 'vuex'
import Sample21 from './Sample/Sample21'
import createPersistedState from 'vuex-persistedstate'

const moduleB = {
  namespaced: true,
  state: {
    counter:3,
  },
  mutations: {
      count(state) {
        state.counter ++
      },
      reset(state) {
        state.counter --
      },      
  },
  actions: {
    count(context) {
      context.commit('count')
    },
    reset(context) {
      context.commit('reset')
    },
  },
}

export default createStore({
  namespaced: true,
  state: {
    message:'This is store data.',
    counter:5,
  },
  mutations: {
      count(state) {
        state.counter ++
      },
      reset(state) {
        state.counter --
      },      
  },
  actions: {
    count(context) {
      context.commit('count')
    },
    reset(context) {
      context.commit('reset')
    },
  },
  modules: {
    a : Sample21,
    b : moduleB,
  },
  plugins: [createPersistedState({storage: window.sessionStorage}),],
})