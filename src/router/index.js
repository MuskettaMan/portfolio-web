import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ArticleView from '../views/ArticleView.vue'

const routes = [
  {
    path: '/blog/:article',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/:project?',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
