<template lang="pug">
section
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
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
