import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleOverview from '../views/ArticleOverview.vue'
import ArticleView from '../views/ArticleView.vue'

const routes = [
  {
    path: '/articles/:article',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/:project?',
    name: 'home',
    component: HomeView
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticleOverview
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
