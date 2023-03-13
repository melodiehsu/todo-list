import store from '../store';

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const setTasks = () => {
  setItem('tasks', store.state.tasks);
};

export const setCurrentTaskId = () => {
  setItem('currentTaskId', store.state.currentTaskId);
};
