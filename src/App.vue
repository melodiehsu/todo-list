<template lang="pug">
v-app
  AppSidebar
  v-main
    router-view
</template>

<script>
import AppSidebar from '@/components/sidebar/index.vue';

export default {
  components: {
    AppSidebar
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
.v-main {
  min-height: 100vh;
}
</style>
