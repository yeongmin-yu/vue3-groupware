import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // import (/*webpackPrefetch: true */ './views/About.vue') prefetch 켜기
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/DataBindingList2',
    name: 'DataBindingList2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // import (/*webpackPrefetch: true */ './views/About.vue') prefetch 켜기
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBindingList2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
