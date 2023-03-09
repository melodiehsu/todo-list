<template lang="pug">
div
  v-navigation-drawer(
    v-model="drawer",
    :mini-variant.sync="mini",
    permanent
  )
    v-list-item.px-2
      v-btn(
        icon,
        @click.stop="mini = !mini"
      )
        v-icon(v-if="mini") mdi-chevron-right {{ drawer }}
        v-icon(v-else) mdi-chevron-left
    v-divider
    v-list(dense)
      v-list-item(
        v-for="item in items",
        :key="item.title",
        link
      )
        v-list-item-icon
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title {{ item.title }}
</template>

<script>
export default {
  name: 'AppSidebar',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' }
      ],
      mini: true
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
