import store from '../store';

export const showSuccessfulToast = (_message) => {
  store.dispatch('openToast', {
    message: _message,
    color: 'green',
    timeout: 3000
  });
};

export const showWarningToast = (_message) => {
  store.dispatch('openToast', {
    message: _message,
    color: 'orange',
    timeout: 3000
  });
};

export const showDangerousToast = (_message) => {
  store.dispatch('openToast', {
    message: _message,
    color: 'red',
    timeout: 3000
  });
};
