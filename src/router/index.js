import { createRouter, createWebHistory } from 'vue-router'
import QuickMenu from '../views/QuickMenu/QuickMenu.vue'

const routes = [
  {
    path: '/',
    name: 'QuickMenu',
    component: QuickMenu
  },
  {
    path: '/customerList',
    name: 'CustomerList',
    component: () => import('../views/Customers/CustomerList.vue')
  },
  {
    path: '/customerShow',
    name: 'CustomerShow',
    component: () => import('../views/Customers/CustomerShow.vue')
  },
  {
    path: '/customerEdit',
    name: 'CustomerEdit',
    component: () => import('../views/Customers/CustomerEdit.vue')
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
  {
    path: '/sample7',
    name: 'Sample7',
    component: () => import('../views/Sample/Sample7.vue')
  },
  {
    path: '/sample8',
    name: 'Sample8',
    component: () => import('../views/Sample/Sample8.vue')
  },
  {
    path: '/sample9',
    name: 'Sample9',
    component: () => import('../views/Sample/Sample9.vue')
  },
  {
    path: '/sample10',
    name: 'Sample10',
    component: () => import('../views/Sample/Sample10.vue')
  },
  {
    path: '/sample11',
    name: 'Sample11',
    component: () => import('../views/Sample/Sample11.vue')
  },
  {
    path: '/sample12',
    name: 'Sample12',
    component: () => import('../views/Sample/Sample12.vue')
  },
  {
    path: '/sample13',
    name: 'Sample13',
    component: () => import('../views/Sample/Sample13.vue')
  },
  {
    path: '/sample14',
    name: 'Sample14',
    component: () => import('../views/Sample/Sample14.vue')
  },
  {
    path: '/sample15',
    name: 'Sample15',
    component: () => import('../views/Sample/Sample15.vue')
  },
  {
    path: '/sample16',
    name: 'Sample16',
    component: () => import('../views/Sample/Sample16.vue')
  },
  {
    path: '/sample17',
    name: 'Sample17',
    component: () => import('../views/Sample/Sample17.vue')
  },
  {
    path: '/sample18',
    name: 'Sample18',
    component: () => import('../views/Sample/Sample18.vue')
  },
  {
    path: '/sample19',
    name: 'Sample19',
    component: () => import('../views/Sample/Sample19.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
