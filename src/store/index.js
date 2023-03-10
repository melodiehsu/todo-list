import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoId: 1,
    todoTasks: [],
    doneTasks: [],
    tags: []
  },
  mutations: {
    ADD_TASK(state, payload) {
      state.todoTasks.push(payload);
    },
    DELETE_TASK(state, payload) {
      state.todoTasks = state.todoTasks.filter(todoTask => todoTask.id !== payload);
    }

  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task);
      console.log('ADD_TASK', task);
    },
    deleteTask({ commit }, taskId) {
      commit('DELETE_TASK', taskId);
      console.log('DELETE_TASK', taskId);
    }
  },
  getters: {}
});
