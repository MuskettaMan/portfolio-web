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

export default {
    name: 'CMSArticlesView',
    title: "Ferri's Portfolio",
    components: {
		CMSTable
    },
    setup() {
        const articles = ref([]);
        const router = useRouter();

        axios.get('https://ferri.dev/api/articles').then((result) => {
            articles.value = result.data.data;
        }).catch((error) => {
            console.error("Failed making GET call to get articles!", error);
        });

		const columns = [
			{ label: 'ID', key: 'id' },
			{ label: 'Title', key: 'title' },
			{ label: 'Description', key: 'description' },
			{ label: 'Date', key: 'date' },
		]

        const formatDate = (date) => {
            return new Date(date).toLocaleDateString();
        };
        const editArticle = (article) => {
            router.push(`/cms/articles/${article.id}`)
        };

        return {
            articles,
            formatDate,
            editArticle,
			columns
        }
    }
}
</script>
  
<style lang="scss" scoped>

</style>
  