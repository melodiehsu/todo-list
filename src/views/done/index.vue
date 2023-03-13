<template lang="pug">
section
  List
</template>

<script>
import List from './components/List.vue';

export default {
  components: {
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
