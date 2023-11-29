import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: () => import('../views/Homepage.vue')
    },
    {
      path: '/motion-2d',
      name: 'Motion 2D',
      component: () => import('../views/Motion2D.vue')
    },
    {
      path: '/software',
      name: 'Software',
      component: () => import('../views/Software.vue')
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: () => import('../views/Tutorial.vue')
    },
    {
      path: '/our-project',
      name: 'Our Project',
      component: () => import('../views/OurProject.vue')
    },
  ]
})

export default router
