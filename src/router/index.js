import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/:project?',
    name: 'home',
    component: HomeView,
    meta: {
      name: "Ferri de Lange Game Developer"
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
