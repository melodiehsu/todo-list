<template lang="pug">
div
  v-text-field(
    v-model="message",
    label="Main input",
    hide-details="auto"
  )
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
</style>
