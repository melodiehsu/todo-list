<template lang="pug">
v-card.mx-auto.mb-10(max-width="80%")
  .d-flex.align-end
    v-text-field(
      v-model="message",
      label="Add a task",
      hide-details="auto"
    )
    v-btn add
</template>

<script>
export default {
  name: 'AddTask',
  //  components: {},
  //  props: {}
  data () {
    return {
      message: ''
    };
  },
  watch: {
    message (newVal) {
      console.log('message', newVal);
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
