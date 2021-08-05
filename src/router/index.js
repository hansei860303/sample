import { createRouter, createWebHistory } from 'vue-router'
import QuickMenu from '../views/QuickMenu/QuickMenu.vue'

const routes = [
  {
    path: '/',
    name: 'QuickMenu',
    component: QuickMenu
  },
  {
    path: '/sample1',
    name: 'Sample1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sample/Sample1.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
