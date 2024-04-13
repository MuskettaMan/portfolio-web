<template>
	<div class="article-overview">
		<div class="wrapper">

			<h2>Articles</h2>
			<div class="description">Hey, welcome to my articles! Every so often I write about something that interests
				me and I wanted
				to share with others. I hope you encounter something you might want to read more about. Happy
				programming!
			</div>

			<div class="articles">
				<div v-if="articles" class="articles-container">
					<div
						v-for="(item, index) in articles"
						:key="index"
						@click="() => routeToArticle(item)"
						class="article-box"
					>
						<div class="thumbnail-container">
							<img :src="`../${item.thumbnail_path}`" alt="Thumbnail" class="thumbnail"/>
							<div class="shadow"/>
						</div>
						<div class="content">
							<h3>{{ item.title }}</h3>
							<p class="description">{{ item.description }}</p>
							<div class="footer">
								<NuxtLink :to="getRoute(item)" class="read-more">
									Read more
								</NuxtLink>
								<p class="date">{{ getFormattedDate(new Date(item.date)) }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import slugify from "slugify";

useSeoMeta({
	title: 'Articles',
	description: 'Articles page of my portfolio website',
	keywords: 'portfolio, articles, articles page, articles page portfolio, portfolio articles page, ferri, ferri de lange, developer, game developer'
})

let articles = (await apiManager.getArticles()).data;
const router = useRouter();


const getRoute = (item) => {
	return `/article/${slugify(item.title, {lower: true})}`;
}

const routeToArticle = (item) => {
	router.push(getRoute(item));
};
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
	grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
	gap: 20px;
}


@media (min-width: 1500px) {
	.articles {
		grid-template-columns: repeat(2, 1fr);
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
	width: 100%;
	height: 20rem;
	max-width: 900px;
	box-sizing: border-box;
	gap: 2rem;
	cursor: pointer;

	padding: 20px;
	margin: 20px 0;

	/* Text properties */
	color: #333;

	.thumbnail-container {
		flex-grow: 5;
		height: 100%;
		overflow: hidden;
		position: relative;

		.thumbnail {
			z-index: -1;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.shadow {
			position: absolute;
			box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.3);
			width: 100%;
			height: 100%;
			top: 0;
		}
	}

	.footer {
		flex-shrink: 5;
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
</style>
  