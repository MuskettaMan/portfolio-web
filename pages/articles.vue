<template>
	<div class="article-overview">
		<Navbar></Navbar>
		<div class="wrapper">

			<h2>Articles</h2>
			<div class="description">Hey, welcome to my articles! Every so often I write about something that interests
				me and I wanted
				to share with others. I hope you encounter something you might want to read more about. Happy
				programming!
			</div>

			<div class="articles">
				<div v-if="articles" v-for="(item, index) in articles" :key="index"
					 @click="() => routeToArticle(item.id)" class="article-box">
					<h3>{{ item.title }}</h3>
					<p>{{ item.description }}</p>
					<div class="footer">
						<NuxtLink :to="`/article/${item.id}`" class="read-more">read more</NuxtLink>
						<p class="date">{{ getFormattedDate(new Date(item.date)) }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from "~/components/Navbar";
import {ref} from "vue";
import {useRouter} from "vue-router";

export default {
	name: 'Articles',
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
			router.push(`/article/${id}`);
		};

		return {
			articles,
			routeToArticle,
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

@media (max-width: 600px) {
	.article-overview {
		.wrapper {
			margin: 1rem 3rem 0 3rem;
		}
	}
}

@media (max-width: 400px) {
	.article-overview {
		.wrapper {
			margin: 1rem 1rem 0 1rem;
		}
	}
}

.article-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 30rem;
	text-align: center;
	box-sizing: border-box;

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

@media (max-width: 600px) {
	.article-box {
		width: 100%;

		h3 {
			font-size: 2rem;
		}
	}
}

.article-box:hover {
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
  