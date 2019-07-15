import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue');
const Project = () => import(/* webpackChunkName: "project" */ '@/views/Project.vue');
const Blogs = () => import(/* webpackChunkName: "blogsView" */ '@/views/Blogs.vue');
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue');

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs,
    },
  ],
});
