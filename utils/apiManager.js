import axios from 'axios';
import {useMainStore} from '~/store/index';

const API_URL = 'https://ferri.dev/api'
//const API_URL = 'http://localhost:500/api'

const instance = axios.create({
    baseURL: API_URL,
    timeout: 5000, // Timeout for requests (in milliseconds)
});

instance.interceptors.request.use(
    (config) => {
        const store = useMainStore();

        // You can add headers, authentication tokens, etc., here
        if (store.isAuthenticated) {
            config.headers['Authorization'] = store.token;
        }

        if (config.method === 'post' || config.method === 'put')
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        // You can handle successful responses here
        return response;
    },
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);

const apiManager = {
    async login(username, password) {
        try {
            const response = await instance.post('/login', {username, password});
            return response.data;
        } catch (error) {
            console.error('Error logging in:', error.message);
            throw error;
        }
    },
    async getArticles() {
        try {
            const response = await instance.get('/articles');
            return response.data;
        } catch (error) {
            console.error('Error fetching articles:', error.message);
            throw error;
        }
    },
    async getArticle(articleId) {
        try {
            const response = await instance.get(`/articles?id=${articleId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching article:', error.message);
            throw error;
        }
    },
    async getProjects() {
        try {
            const response = await instance.get('/projects');
            return response.data;
        } catch (error) {
            console.error('Error fetching projects:', error.message);
            throw error;
        }
    },
    async getProject(projectId) {
        try {
            const response = await instance.get(`/projects?id=${projectId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching projects:', error.message);
            throw error;
        }
    },
    async createProject(projectData) {
        try {
            const response = await instance.post('/projects/create', projectData);
            return response.data;
        } catch (error) {
            console.error('Error creating project:', error.message);
            throw error;
        }
    },
    async editProject(projectData) {
        try {
            const response = await instance.put('/projects/edit', projectData);
            return response.data;
        } catch (error) {
            console.error('Error editing project:', error.message);
            throw error;
        }
    },
    async deleteProject(projectId) {
        try {
            const response = await instance.delete('/projects/delete', {data: {id: projectId}});
            return response.data;
        } catch (error) {
            console.error('Error deleting project:', error.message);
            throw error;
        }
    },
    async editArticle(articleData) {
        try {
            const response = await instance.put('/articles/edit', articleData);
            return response.data;
        } catch (error) {
            console.error('Error editing article:', error.message);
            throw error;
        }
    },
    async createArticle(articleData) {
        try {
            const response = await instance.post('/articles/create', articleData);
            return response.data;
        } catch (error) {
            console.error('Error creating article:', error.message);
            throw error;
        }
    },
    async deleteArticle(articleId) {
        try {
            const response = await instance.delete('/articles/delete', {data: {id: articleId}});
            return response.data;
        } catch (error) {
            console.error('Error deleting article:', error.message);
            throw error;
        }
    }

    // Add more methods as needed for your specific API calls
};

export default apiManager;
