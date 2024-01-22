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

			<div class="form-group">
				<label for="is_published">Is Published:</label>
				<input type="checkbox" v-model="article.is_published" id="is_published"/>
			</div>

            <button type="submit">Save Changes</button>
        </form>
    </div>
</template>
  
<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import store from '@/store'
import Markdown from 'vue3-markdown-it';
import apiManager from "@/scripts/apiManager";

export default {
    name: 'Edit Article',
    title: "Ferri's Portfolio",
    components: {
        Markdown
    },
    setup() {
        const article = ref(null);
		const route = useRoute();
		const router = useRouter();

        apiManager.getArticle(route.params.id).then((result) => {
            article.value = result.data;

			article.value.date = new Date(article.value.date).toLocaleDateString('en-CA');
			article.value.is_published = !!article.value.is_published;
		}).catch((error) => {
			console.error("Failed making GET call to get articles!", error);
		});

        const editArticle = (articleId) => {
			article.value.is_published = article.value.is_published ? 1 : 0;
            apiManager.editArticle({
				id: articleId,
				...article.value
			}).then((result) => {
                router.push(`/cms/articles`);
            });
        };

        return {
            article,
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
  