import { front_routes } from '@/zems/Front/Routes/front_routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...front_routes],
})

export default router
