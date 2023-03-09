<template lang="pug">
div
  AddTask
  TodoList
</template>

<script>
import TodoList from '../components/todo-list/TodoList.vue';
import AddTask from '../components/todo-list/AddTask.vue';

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
