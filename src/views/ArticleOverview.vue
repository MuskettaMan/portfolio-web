<template>
    <div class="article-overview">
        <Navbar></Navbar>
        <div class="wrapper">

            <h2>Articles</h2>
            <div class="description">Hey, welcome to my articles! Every so often I write about something that interests me and I wanted
                to share with others. I hope you encounter something you might want to read more about. Happy programming!
            </div>

            <div class="articles">
                <div v-if="articles" v-for="(item, index) in articles" :key="index" @click="() => routeToArticle(item.id)" class="article-box">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    <div class="footer">
                        <router-link :to="`/articles/${item.id}`" class="read-more">read more</router-link>
                        <p class="date">{{ getFormattedDate(new Date(item.date)) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Navbar from "@/components/Navbar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getFormattedDate } from "@/assets/helpers/dates"
import apiManager from "@/scripts/apiManager";

export default {
    name: 'Article overview',
    title: "Ferri's Portfolio",
    components: {
        Navbar
    },
    setup() {
        let articles = ref([]);
        const router = useRouter();

        apiManager.getArticles().then((result) => {
            articles.value = result.data;
        });

        const routeToArticle = (id) => {
            router.push(`/articles/${id}`);
        };

        return {
            articles,
            getFormattedDate,
            routeToArticle
        }
    }
}
</script>
  
<style lang="scss" scoped>
.read-more-transition-leave-active {
    transition: opacity 250ms;
    opacity: 0;
}

.article-overview {
    scroll-behavior: smooth;

    .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 5rem 10rem 0 10rem;
    }
}

.description {
    margin: 2rem 0;
}

.articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}


@media (min-width: 1500px) {
    .articles {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 400px) {
    .article-overview {
        .wrapper {
            margin: 1rem 3rem 0 3rem;
        }
    }

}


.article-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    max-width: 30rem;
    text-align: center;

    cursor: pointer;

    padding: 20px;
    margin: 20px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    /* Box shadow for a subtle lift */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    /* Background color */
    background-color: #fff;

    /* Text properties */
    color: #333;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.5;

    /* Optional: Add a transition for smooth hover effects */
    transition: box-shadow 0.3s ease-in-out;

    .footer {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
        align-self: flex-start;
        
        width: 100%;

        .date {
            font-style: italic;
            margin: 0;
        }
    }
}

@media (max-width: 400px){
    .article-box {
        width: inherit;
    }
}

.article-box:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
  