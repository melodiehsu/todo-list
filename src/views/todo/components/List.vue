<template lang="pug">
v-card.mx-auto(width="70%")
  v-toolbar(color="black", dark)
    v-app-bar-nav-icon
    v-toolbar-title Todo
    v-spacer

  v-list.overflow-y-auto(
    max-height="70vh",
    flat
  )
    v-list-item-group(
      active-class,
      mandatory
    )
      div(
        v-if="todoTasks.length !== 0"
      )
        v-list-item(
          v-for="todoTask in todoTasks",
          :key="todoTask.id"
        )
          template(
            #default="{ active }"
          )
            v-list-item-action
              v-checkbox(
                :input-value="todoTask.isDone"
              )
            v-list-item-content
              .todo-task {{ todoTask.value }}
              v-list-item-subtitle {{ todoTask.tag }}
            v-list-item-action
              v-btn(
                icon,
                outlined,
                small,
                @click="deleteTask(todoTask.id)"
              )
                v-icon(size="18") mdi-trash-can
      div(v-else)
        v-card-subtitle There is nothing left to do! Congrats!
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    todoTasks() {
      return this.$store.state.todoTasks;
    }
  },
  methods: {
    deleteTask(taskId) {
      this.$store.dispatch('deleteTask', taskId);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-task {
  overflow: auto;
}

.v-card__subtitle {
  text-align: center;
}
</style>
