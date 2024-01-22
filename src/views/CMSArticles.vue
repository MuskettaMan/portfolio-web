<template>
	<div class="articles">
		<h2>Articles</h2>
		<CMSTable :edit-callback="editArticle" :delete-callback="deleteArticle" :data="articles" :columns="columns"/>
		<button @click="createArticle" class="create-button">Create</button>
	</div>
</template>

<script>
import axios from 'axios'
import {ref} from "vue";
import {useRouter} from "vue-router";
import store from '@/store'
import CMSTable from "@/components/CMSTable.vue";
import apiManager from "@/scripts/apiManager";

export default {
	name: 'CMSArticlesView',
	title: "Ferri's Portfolio",
	components: {
		CMSTable
	},
	setup() {
		const articles = ref([]);
		const router = useRouter();

		apiManager.getArticles().then((result) => {
			articles.value = result.data;
		});

		const columns = [
			{label: 'ID', key: 'id'},
			{label: 'Title', key: 'title'},
			{label: 'Description', key: 'description'},
			{
				label: 'Date', key: 'date', func: (item) => {
					return new Date(item).toLocaleDateString();
				}
			},
			{
				label: 'Published', key: 'is_published', func: (item) => {
					return item ? 'Yes' : 'No';
				}, keyIsClass: true
			}
		]
		const editArticle = (article) => {
			router.push(`/cms/articles/${article.id}`)
		};

		const deleteArticle = (article) => {
			apiManager.deleteArticle(article.id).then((result) => {
				articles.value = articles.value.filter((item) => {
					return item.id !== article.id;
				});
			});
		};

		const createArticle = () => {
			router.push(`/cms/articles/create`)
		};

		return {
			articles,
			columns,
			editArticle,
			deleteArticle,
			createArticle
		}
	}
}
</script>

<style lang="scss" scoped>
.create-button {
	font-weight: bold;
}
</style>
  