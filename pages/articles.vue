<template>
	<div class="article-overview">
		<div class="wrapper">

			<h2>Articles</h2>
			<div class="description">Hey, welcome to my articles! Every so often I write about something that interests
				me and I wanted
				to share with others. I hope you encounter something you might want to read more about. Happy
				programming!
			</div>

			<div v-if="articles" class="articles">
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
	display: flex;
	flex-direction: column;
	gap: 50px;
	margin-bottom: 4rem;
}

.article-box {
	display: flex;
	box-sizing: border-box;
	width: 100%;
	height: 20rem;
	max-width: 900px;
	gap: 3rem;
	cursor: pointer;

	padding: 20px;

	color: white;
	background-color: #403d39;

	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
	border-radius: 4px;

	.thumbnail-container {
		min-width: 300px;
		min-height: 300px;
		overflow: hidden;
		position: relative;
		margin: -20px;
		border-radius: 4px;
		border-right: 4px solid $flame;

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

	.content {
		color: white;


		h3 {
			font-size: 2rem;
			margin: 0;
		}

		.description {
			color: white;
		}

		.footer {
			display: flex;
			justify-content: space-between;
			margin-top: auto;

			p {
				color: white;
			}

			width: 100%;

			.date {
				font-style: italic;
				margin: 0;
			}
		}
	}
}


@media (min-width: 1500px) {
	.articles {
		//grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 1200px) {
	h3 {
		font-size: 1.5rem;
	}
	p {
		font-size: 0.9rem;
	}
}

@media (max-width: 1000px) {
	.article-box {
		flex-direction: column;
		gap: 1rem;
		height: fit-content;

		.thumbnail-container {
			min-width: 100%;
			min-height: 200px;
		}

		.content {
			margin-top: 10px;
		}
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

@media (max-width: 600px) {
	.article-box {
		width: 100%;

		h3 {
			font-size: 2rem;
		}
	}
}
</style>
  