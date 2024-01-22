<template>
    <div class="edit-article">
        <h2>Edit Article</h2>
        <form v-if="article" @submit.prevent="editArticle">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" v-model="article.title" id="title" required />
            </div>

            <div class="form-group">
                <label for="description">Description:</label>
                <textarea v-model="article.description" id="description" required></textarea>
            </div>

            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" v-model="article.date" id="date" required />
            </div>

            <div class="form-group">
                <label for="markdown">Markdown:</label>
                <textarea v-model="article.markdown" id="markdown" required></textarea>
            </div>

            <button type="submit">Save Changes</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios'
import { ref } from "vue";
import { useRoute } from "vue-router";
import store from '@/store'
import Markdown from 'vue3-markdown-it';

export default {
    name: 'Edit Article',
    title: "Ferri's Portfolio",
    components: {
        Markdown
    },
    setup() {
        const article = ref(null);
        const route = useRoute();

        axios.get(`https://ferri.dev/api/articles?id=${route.params.id}`).then((result) => {
            article.value = result.data.data;
        }).catch((error) => {
            console.error("Failed making GET call to get articles!", error);
        });

        const formatDate = (date) => {
            return new Date(date).toLocaleDateString();
        };
        const editArticle = (articleId) => {
            axios.put(`http://localhost:500/api/articles/edit`, {
                id: articleId,
                ...article.value
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'authorization': `${store.getters.token}`
                }
            }).then((result) => {
                article.value = result.data.data;
            }).catch((error) => {
                console.error("Failed making GET call to get articles!", error.message);
            });
        };

        return {
            article,
            formatDate,
            editArticle
        }
    }
}
</script>
  
<style lang="scss" scoped>
.edit-article {
    margin: 20px;
    width: 50%;
}

input,
textarea,
button {
	width: 100%;
}
</style>
  