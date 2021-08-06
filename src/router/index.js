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
    component: () => import('../views/Sample/Sample1.vue')
  },
  {
    path: '/sample2',
    name: 'Sample2',
    component: () => import('../views/Sample/Sample2.vue')
  },
  {
    path: '/sample3',
    name: 'Sample3',
    component: () => import('../views/Sample/Sample3.vue')
  },
  {
    path: '/sample4',
    name: 'Sample4',
    component: () => import('../views/Sample/Sample4.vue')
  },
  {
    path: '/sample5',
    name: 'Sample5',
    component: () => import('../views/Sample/Sample5.vue')
  },
  {
    path: '/sample6',
    name: 'Sample6',
    component: () => import('../views/Sample/Sample6.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
