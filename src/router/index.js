import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/SearchView/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchView,
    },
  ],
})

export default router
