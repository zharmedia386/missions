import { createStore } from 'vuex'

export const store = createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  getters: {
    getTokens: function (state) {
        return `${state.token}`
      }
  },
});
