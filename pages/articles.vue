<template>
	<div class="article-overview">
		<div class="wrapper">

			<h2>Articles</h2>
			<div class="description">
				<p>
					Hey, welcome to my articles! Every so often I write about something that interests
					me and I wanted
					to share with others. I hope you encounter something you might want to read more about. Happy
					programming!
				</p>
			</div>

			<div v-if="articles" class="articles">
				<div
					v-for="(item, index) in articles"
					:key="index"
					@click="() => routeToArticle(item)"
					class="article-box btn-4"
				>
					<div class="thumbnail-container">
						<img :src="`../${item.thumbnail_path}`" alt="Thumbnail" class="thumbnail"/>
						<div class="shadow"/>
					</div>
					<div class="content-wrapper">
						<div class="content">
							<h3>{{ item.title }}</h3>
							<p class="description">{{ item.description }}</p>
							<div class="footer">
								<p class="date">{{ getFormattedDate(new Date(item.date)) }}</p>
								<CTAButton :link="getRoute(item)" :text="'Read more'"/>
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
.article-overview {
	scroll-behavior: smooth;

	.description {
		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 5rem 10rem 0 10rem;
	}
}

.articles {
	display: flex;
	flex-direction: column;
	gap: 50px;
	margin-bottom: 4rem;
}

.btn-4 {
	overflow: hidden;
	position: relative;

	span {
		z-index: 20;
	}

	&:after {
		background: #fff;
		content: "";
		height: 200%;
		left: -50%;
		opacity: .1;
		position: absolute;
		top: -50%;
		transform: rotate(35deg);
		transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
		width: 16%;
		z-index: 0;
		pointer-events: none;
	}
}

.btn-4:hover {

	&:after {
		left: 120%;
		transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
	}
}

.article-box {
	display: flex;
	box-sizing: border-box;
	width: 100%;
	height: 20rem;
	max-width: 900px;
	cursor: pointer;

	color: white;
	background-color: #403d39;

	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
	border-radius: 4px;

	transition: box-shadow 0.3s ease-in-out;

	&:hover {
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
	}

	.thumbnail-container {
		min-width: 300px;
		min-height: 300px;
		overflow: hidden;
		position: relative;
		border-radius: 4px;

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

	.content-wrapper {
		padding: 20px;
		border-left: 4px solid $flame;

		.content {
			color: white;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;

			h3 {
				font-size: 2rem;
				margin: 0;
				font-weight: 700;
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
					border-radius: 0.5rem;
					padding: 0.4rem;
					background-color: rgba(0, 0, 0, 0.2);
					margin: auto 0 0;
					height: fit-content;
				}
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
	.btn-4 {
		&:after {
			display: none;
		}
	}
	.article-box {
		flex-direction: column;
		height: fit-content;

		.thumbnail-container {
			min-width: 100%;
			min-height: 200px;
		}

		.content-wrapper {
			border-left: 0;
			border-top: 4px solid $flame;

			.content {
				margin-top: 10px;
			}
		}
	}
}

@media (max-width: 700px) {
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
  