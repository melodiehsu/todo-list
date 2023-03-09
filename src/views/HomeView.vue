<template lang="pug">
.d-flex-column.align-self-center
  AddTask
  TodoList
</template>

<script>
import TodoList from '../components/todo/TodoList.vue';
import AddTask from '../components/todo/AddTask.vue';

export default {
  name: 'HomeView',
  components: {
    TodoList,
    AddTask
  },
  data () {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>
