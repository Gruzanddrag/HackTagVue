import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "http://31.172.133.69:10180"
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
