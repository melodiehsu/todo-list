<template lang="pug">
v-card.mx-auto.mb-10(width="70%")
  .d-flex.align-end
    v-text-field(
      v-model="taskValue",
      label="Add a task",
      hide-details="auto",
      @keyup.enter="addTask"
    )
    v-btn(@click="addTask") add
</template>

<script>
import { setCurrentTaskId, setTasks } from '../../../utils/local-storage';

export default {
  data() {
    return {
      taskValue: ''
    };
  },
  methods: {
    clearTaskValue() {
      this.taskValue = '';
    },
    addTask() {
      if (this.taskValue === '') return;

      this.$store.dispatch('addTask', {
        id: this.$store.state.currentTaskId++,
        value: this.taskValue,
        tag: 'aaa',
        isDone: false
      });

      setTasks();
      setCurrentTaskId();
      this.clearTaskValue();
    }
  }
};
</script>

  <style lang="scss" scoped>
.v-card {
  padding: 10px;
}

.v-text-field {
  margin-right: 10px;
}
</style>

