import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "http://31.172.133.69:10180",
    user: {},
    token: ''
  },
  getters: {
    user: state => state.user,
    token: state => state.token
  },
  mutations: {
    SET_USER(state, pl) {
      state.user = pl;
    },
    SET_TOKEN(state, pl) {
      state.token = pl;
    }
  },
  actions: {
  },
  modules: {
  }
})
