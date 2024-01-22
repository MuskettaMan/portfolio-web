
import axios from 'axios';
import store from '@/store';

const API_URL= 'http://localhost:500/api'

const instance = axios.create({
    baseURL: API_URL,
    timeout: 5000, // Timeout for requests (in milliseconds)
});

instance.interceptors.request.use(
    (config) => {
        // You can add headers, authentication tokens, etc., here
        if(store.getters.isAuthenticated)
        {
            config.headers['Authorization'] = store.getters.token;
        }

        if(config.method === 'post' || config.method === 'put')
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
    // Example method for fetching articles
    async getArticles() {
        try {
            const response = await instance.get('/articles');
            return response.data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    },
    async getArticle(articleId) {
        try {
            const response = await instance.get(`/articles?id=${articleId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    },
    async getProjects() {
        try {
            const response = await instance.get('/projects');
            return response.data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    },
    async editArticle(articleData) {
        try {
            const response = await instance.put('/articles/edit', articleData);
            return response.data;
        } catch (error) {
            console.error('Error creating article:', error);
            throw error;
        }
    },

    // Add more methods as needed for your specific API calls
};

export default apiManager;
