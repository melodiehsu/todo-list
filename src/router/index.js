import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/todo-tasks'
    },
    {
      path: '/todo-tasks',
      name: 'todo-list',
      component: () => import('../views/todo/index.vue')
    },
    {
      path: '/done-tasks',
      name: 'done-list',
      component: () => import('../views/done/index.vue')
    },
    {
      path: '/tags',
      name: 'tag-list',
      component: () => import('../views/tag/index.vue')
    }
  ]
});

export default router;
