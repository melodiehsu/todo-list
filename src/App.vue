<template lang="pug">
v-app
  AppSidebar
  v-main
    router-view
    Notification
</template>

<script>
import AppSidebar from '@/components/sidebar/index.vue';
import Notification from '@/components/toast/index.vue';

export default {
  components: {
    AppSidebar,
    Notification
  },
  data() {
    return {
    };
  },
  mounted() {
    if (!localStorage.tasks) return;

    const currentTaskId = JSON.parse(localStorage.currentTaskId);
    const tasks = JSON.parse(localStorage.tasks);
    this.$store.dispatch('initState', { currentTaskId, tasks });
  }
};
</script>

<style lang="scss" scoped>
.v-main {
  min-height: 100vh;
}
</style>
