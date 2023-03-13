import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTaskId: 1,
    tasks: [],
    tags: [],
    toast: {
      message: '',
      isVisible: false,
      timeout: 0,
      color: ''
    }
  },
  mutations: {
    INIT_STATE(state, { currentTaskId, tasks }) {
      state.currentTaskId = currentTaskId;
      state.tasks = tasks;
    },
    ADD_TASK(state, task) {
      state.tasks = [...state.tasks, task];
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    DID_TASK(state, taskId) {
      state.tasks.forEach((task) => {
        if (taskId === task.id) {
          task.isDone = true;
        }
      });
    },
    RESTORE_DONE_TASK(state, taskId) {
      state.tasks.forEach((task) => {
        if (taskId === task.id) {
          task.isDone = false;
        }
      });
    },
    OPEN_TOAST(state, options) {
      state.toast.isVisible = true;
      state.toast.message = options.message;
      state.toast.color = options.color;
    },
    CLOSE_TOAST(state) {
      state.toast.isVisible = false;
    }
  },
  actions: {
    initState({ commit }, { currentTaskId, tasks }) {
      commit('INIT_STATE', { currentTaskId, tasks });
    },
    addTask({ commit }, task) {
      commit('ADD_TASK', task);
    },
    deleteTask({ commit }, taskId) {
      commit('DELETE_TASK', taskId);
    },
    didTask({ commit }, taskId) {
      commit('DID_TASK', taskId);
    },
    restoreDoneTask({ commit }, taskId) {
      commit('RESTORE_DONE_TASK', taskId);
    },
    openToast({ commit }, options) {
      commit('OPEN_TOAST', {
        message: options.message,
        color: options.color
      });
      setTimeout(() => {
        commit('CLOSE_TOAST');
      }, options.timeout);
    }
  },
  getters: {
    todoTasks(state) {
      return state.tasks.filter(task => !task.isDone);
    },
    doneTasks(state) {
      return state.tasks.filter(task => task.isDone);
    }
  }
});
