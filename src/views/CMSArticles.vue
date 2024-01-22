<template>
    <div class="articles">
        <h2>Articles</h2>
        <CMSTable :edit-callback="editArticle" :data="articles" :columns="columns"/>
    </div>
</template>
  
<script>
import axios from 'axios'
import { ref } from "vue";
import { useRouter } from "vue-router";
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
			{ label: 'ID', key: 'id' },
			{ label: 'Title', key: 'title' },
			{ label: 'Description', key: 'description' },
			{ label: 'Date', key: 'date', func: (item) => { return new Date(item).toLocaleDateString(); } },
			{ label: 'Published', key: 'is_published', func: (item) => { return item ? 'Yes' : 'No'; }, keyIsClass: true }
		]
        const editArticle = (article) => {
            router.push(`/cms/articles/${article.id}`)
        };

        return {
            articles,
            editArticle,
			columns
        }
    }
}
</script>
  
<style lang="scss" scoped>
</style>
  