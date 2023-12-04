import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      redirect: '/unit-4'
    },
    {
      path: '/unit-4',
      name: 'Unit 4',
      component: () => import('../views/Unit4.vue')
    },
    {
      path: '/unit-9',
      name: 'Unit 9',
      component: () => import('../views/Unit9.vue')
    },
    {
      path: '/unit-13',
      name: 'Unit 13',
      component: () => import('../views/Unit13.vue')
    },
    {
      path: '/our-team',
      name: 'Our Team',
      component: () => import('../views/OurTeam.vue')
    },
  ]
})

export default router
