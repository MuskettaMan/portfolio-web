import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleOverview from '../views/ArticleOverview.vue'
import ArticleView from '../views/ArticleView.vue'
import LoginView from '../views/LoginView.vue'
import CMSView from '../views/CMSView.vue'
import CMSLayout from '../layouts/CMSLayout.vue'
import store from '@/store'

const routes = [
  {
    path: '/articles/:article',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticleOverview
  },
  {
    path: '/:project?',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cms/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cms',
    component: CMSLayout,
    children: [
      {
        path: '',
        name: 'cms-home',
        component: CMSView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from) => {
  if(to.fullPath.includes('cms') && !store.getters.isAuthenticated && to.name !== 'login') 
  {
    return { name: 'login' };
  }
  if(to.name == 'login' && store.getters.isAuthenticated)
  {
    return { name: 'cms-home' };
  }
});

export default router
