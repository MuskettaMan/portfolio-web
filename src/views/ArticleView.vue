<template>
    <div class="article">
        <Navbar></Navbar>
        <div v-if="article" class="wrapper">
            <Markdown class="article-body" :source="article.markdown"/>
        </div>
    </div>
</template>
  
<script>
import Navbar from "@/components/Navbar";
import axios from 'axios'
import { ref } from "vue";
import { useRoute } from "vue-router";
import Markdown from 'vue3-markdown-it';

export default {
    name: 'ArticleView',
    title: "Ferri's Portfolio",
    components: {
        Navbar,
        Markdown
    },
    setup() {
        let article = ref(); 
        const route = useRoute();


        axios.get(`https://ferri.dev/api/articles?id=${route.params.article}`).then((result) => {
            article.value = result.data.data;
        }).catch((error) => {
            console.error("Failed making GET call to get articles!", error);
        });

        return {
            article
        }
    }
}
</script>
  
<style lang="scss" scoped>
.read-more-transition-leave-active {
    transition: opacity 250ms;
    opacity: 0;
}

.article {
    scroll-behavior: smooth;

    .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 50vw;
        margin: 0 auto;

        .article-body {
            p {
                margin: 1rem 0;
            }
        }
    }
}

</style>
  