<template lang="pug">
v-card.mx-auto.mb-10(width="70%")
  .d-flex.align-end
    v-text-field(
      v-model="taskValue",
      label="Add a task",
      hide-details="auto"
    )
    v-btn add
</template>

<script>
export default {
  //  components: {},
  //  props: {}
  data() {
    return {
      taskValue: ''
    };
  },
  watch: {
    taskValue(newVal) {
      console.log('taskValue', newVal);
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  padding: 10px;
}

.v-text-field {
  margin-right: 10px;
}
</style>
