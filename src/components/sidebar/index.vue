<template lang="pug">
v-navigation-drawer(
  app,
  :mini-variant.sync="isCollapsed",
  permanent
)
  v-list-item.px-2
    v-btn(
      icon,
      @click.stop="isCollapsed = !isCollapsed"
    )
      v-icon(v-if="isCollapsed") mdi-chevron-right
      v-icon(v-else) mdi-chevron-left
  v-divider

  v-list(nav)
    v-list-item-group(
      v-model="currentPage",
      color="primary"
    )
      v-list-item(
        v-for="page in pages",
        :key="page.title",
        :to="page.path"
      )
        v-list-item-icon
          v-icon(v-text="page.icon")
        v-list-item-content
          v-list-item-title(
            v-text="page.title"
          )
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: true,
      currentPage: 0,
      pages: [
        {
          title: 'Todo',
          icon: 'mdi-format-list-bulleted-square',
          path: '/todo-tasks'
        },
        {
          title: 'Done',
          icon: 'mdi-check',
          path: '/done-tasks'
        },
        {
          title: 'Tags',
          icon: 'mdi-tag-multiple',
          path: '/tags'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
