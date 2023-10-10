import { createStore } from "vuex";
import { getusers } from "@/services/UserService";

export default createStore({
  state: {
    users: [],
  },
  getters: {
    getusers: (state) => state.users,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    addNewUser(state, user) {
      state.users.unshift(user);
    },
  },
  actions: {
    loadUsers({ commit }) {
      getusers().then((response) => {
        commit("setUsers", response);
      });
    },
    addNewUser({ commit }, _user) {
      commit("addNewUser", _user);
    },
  },
});
