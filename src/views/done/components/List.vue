<template lang="pug">
v-card.mx-auto(width="70%")
  v-toolbar(color="black", dark)
    v-app-bar-nav-icon
    v-toolbar-title Done
    v-spacer

  v-list.overflow-y-auto(
    min-height="50vh",
    max-height="70vh",
    flat
  )
    v-list-item-group(
      active-class,
      mandatory
    )
      div(
        v-if="doneTasks && doneTasks.length !== 0"
      )
        v-list-item(
          v-for="doneTask in doneTasks",
          :key="doneTask.id"
        )
          template(
            #default="{ active }"
          )
            v-list-item-action
              v-checkbox(
                :input-value="doneTask.isDone",
                @click="restoreDoneTask(doneTask.id)"
              )
            v-list-item-content
              .done-task.text-decoration-line-through {{ doneTask.value }}
              v-list-item-subtitle {{ doneTask.tag }}
            v-list-item-action
              v-btn(
                icon,
                outlined,
                small,
                @click="deleteTask(doneTask.id)"
              )
                v-icon(size="18") mdi-trash-can
      div(v-else)
        v-card-subtitle You have not done any task yet🥲
</template>

<script>
import { setTasks } from '../../../utils/local-storage';
import { showDangerousToast, showWarningToast } from '../../../utils/toast';

export default {
  data() {
    return {
    };
  },
  computed: {
    doneTasks() {
      return this.$store.getters.doneTasks;
    }
  },
  methods: {
    deleteTask(taskId) {
      this.$store.dispatch('deleteTask', taskId);
      setTasks();

      showDangerousToast('You have deleted a task!');
    },
    restoreDoneTask(taskId) {
      this.$store.dispatch('restoreDoneTask', taskId);
      setTasks();

      showWarningToast('You have restored a task!');
    }
  }
};
</script>

<style lang="scss" scoped>
.done-task {
  overflow: auto;
}

.v-card__subtitle {
  text-align: center;
}
</style>
