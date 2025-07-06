// store/index.js (simplified Vuex example)
//import { createStore } from '../vue/vuex.global.js';

const store = Vuex.createStore({
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    setAuthenticated(state, status) {
      state.isAuthenticated = status;
    },
    setUser(state, userData) {
      state.user = userData;
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  },
  actions: {
    // Example login action
    async login({ commit }, credentials) {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          if (credentials.username === 'admin' && credentials.password === 'password') {
            commit('setAuthenticated', true);
            commit('setUser', { username: 'user' });
            resolve(true);
          } else {
            resolve(false);
          }
        }, 500);
      });
    },
    logout({ commit }) {
      commit('setAuthenticated', false);
      commit('setUser', null);
    },
  },
});

export default store;