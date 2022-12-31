import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // component: Login
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },{
    path: '/register',
    name: 'Register',
    // component: Login
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },{
    path: '/group',
    name: 'Group',
    // component: Login
    component: () => import(/* webpackChunkName: "about" */ '../views/GroupView.vue')
  },{
    path: '/practice',
    name: 'Practice',
    // component: Login
    component: () => import(/* webpackChunkName: "about" */ '../views/PracticeView.vue')
  },{
    path: '/modal',
    name: 'Modal',
    // component: Login
    component: () => import(/* webpackChunkName: "about" */ '../components/Modal.vue')
  },{
    path: '/discovery',
    name: 'Discovery',
    // component: Login
    component: () => import(/* webpackChunkName: "about" */ '../views/DiscoveryView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
