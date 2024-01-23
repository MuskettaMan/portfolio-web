<template>
	<div class="create-article">
		<h2>Create Article</h2>
		<form v-if="article" @submit.prevent="createArticle">
			<div class="form-group">
				<label for="title">Title:</label>
				<input type="text" v-model="article.title" id="title" required/>
			</div>

			<div class="form-group">
				<label for="description">Description:</label>
				<textarea v-model="article.description" id="description" required></textarea>
			</div>

			<div class="form-group">
				<label for="date">Date:</label>
				<input type="date" v-model="article.date" id="date" required/>
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
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import Markdown from 'vue3-markdown-it';

export default {
	name: 'Create Article',
	title: "Ferri's Portfolio",
	components: {
		Markdown
	},
	setup() {
		const article = ref({date: new Date(Date.now()).toLocaleString('en-CA').split(',')[0]});
		const route = useRoute();
		const router = useRouter();

		const createArticle = (articleId) => {
			article.value.is_published = article.value.is_published ? 1 : 0;
			apiManager.createArticle({
				...article.value
			}).then((result) => {
				router.push(`/cms/articles`);
			});
		};

		return {
			article,
			createArticle
		}
	}
}
</script>

<style lang="scss" scoped>
.create-article {
	margin: 20px;
	width: 50%;
}

input,
textarea,
button {
	width: 100%;
}
</style>
  