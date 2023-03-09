<template lang="pug">
v-app
  AppSidebar
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
::v-deep .v-application--wrap {
  flex-direction: row;
}
</style>
