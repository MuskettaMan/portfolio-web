<template>
    <div class="blog">
        <Navbar></Navbar>
        <div class="wrapper">

            <h2>Blog</h2>
            <div class="description">Hey, welcome to my blog! Here I sometimes post about interesting topics that I wanted
                to share with others. I hope you encounter something you might want to read more about. Happy programming!
            </div>

            <div class="articles">
                <div v-if="articles" v-for="(item, index) in articles" :key="index" class="article-box">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    <div class="footer">
                        <router-link to="/" class="read-more">read more</router-link>
                        <p class="date">{{ getFormattedDate(new Date(item.date)) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Navbar from "@/components/Navbar";
import axios from 'axios'
import { ref } from "vue";

export default {
    name: 'BlogView',
    title: "Ferri's Portfolio",
    components: {
        Navbar
    },
    setup() {
        let articles = ref([]);

        axios.get('http://localhost:500/api/articles').then((result) => {
            articles.value = result.data.data;
            console.log(articles);
        }).catch((error) => {
            console.error("Failed making GET call to get articles!", error);
        });

        const getFormattedDate = (date) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
            const year = date.getFullYear();

            // Format the date as 'dd-mm-yyyy'
            const formattedDate = `${day}-${month}-${year}`;

            return formattedDate;
        }

        return {
            articles,
            getFormattedDate
        }
    }
}
</script>
  
<style lang="scss" scoped>
.read-more-transition-leave-active {
    transition: opacity 250ms;
    opacity: 0;
}

.blog {
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
    .blog {
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
        margin-top: 2rem;
        align-self: flex-start;
        
        width: 100%;

        .date {
            font-style: italic;
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
  