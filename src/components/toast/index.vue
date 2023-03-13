<template lang="pug">
div
  v-snackbar(
    v-model="isVisible",
    :color="this.$store.state.toast.color",
    app,
    top
  )
    span {{ this.$store.state.toast.message }}
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isVisible() {
      return this.$store.state.toast.isVisible;
    }
  }
};
</script>
