<template lang="pug">
.d-flex-column.align-self-center
  Create
  List
</template>

<script>
import Create from './components/Create.vue';
import List from './components/List.vue';

export default {
  components: {
    Create,
    List
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
