import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import(/* webpackChunkName: "project" */ './views/Project.vue'),
    },
    {
      path: '/hobby',
      name: 'hobby',
      component: () => import(/* webpackChunkName: "hobby" */ './views/Hobby.vue'),
    },
  ],
});
