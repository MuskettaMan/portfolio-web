import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleOverview from '../views/ArticleOverview.vue'
import ArticleView from '../views/ArticleView.vue'
import LoginView from '../views/LoginView.vue'
import CMSView from '../views/CMSView.vue'
import CMSArticles from '../views/CMSArticles.vue'
import EditArticleView from '../views/EditArticleView.vue'
import CreateArticleView from '../views/CreateArticleView.vue'
import CMSProjects from '../views/CMSProjects.vue'
import CMSLayout from '../layouts/CMSLayout.vue'
import store from '@/store'
import CreateProjectView from "@/views/CreateProjectView.vue";
import EditProjectView from "@/views/EditProjectView.vue";

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
        path: '',
        name: 'home',
        component: HomeView
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
            },
            {
                path: 'articles',
                name: 'cms-articles',
                component: CMSArticles
            },
            {
                path: 'articles/create',
                name: 'create-article',
                component: CreateArticleView
            },
            {
                path: 'articles/:id',
                name: 'edit-article',
                component: EditArticleView
            },
            {
                path: 'projects',
                name: 'cms-projects',
                component: CMSProjects
            },
            {
                path: 'projects/create',
                name: 'create-project',
                component: CreateProjectView
            },
            {
                path: 'projects/:id',
                name: 'edit-project',
                component: EditProjectView
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from) => {
    if (to.fullPath.includes('cms') && !store.getters.isAuthenticated && to.name !== 'login') {
        return {name: 'login'};
    }
    if (to.name == 'login' && store.getters.isAuthenticated) {
        return {name: 'cms-home'};
    }
});

export default router
