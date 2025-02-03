<template>
	<div class="article">
		<div class="banner" :style="`--banner-url: url(../../${article.data.banner_path});`"/>
		<div class="wrapper">
			<div class="article-body">
				<h1>{{ articleMarkdown.title }}</h1>
				<h3>Contents</h3>
				<ul class="toc">
					<li v-for="link of articleMarkdown.body.toc.links" :key="link.id">
						<a :href="`#${link.id}`">{{ link.text }}</a>
					</li>
				</ul>
				<ContentRenderer :value="articleMarkdown"/>
			</div>
		</div>
	</div>
</template>

<script setup>
import {useRoute} from "vue-router";
import markdownParser from "@nuxt/content/transformers/markdown";

const route = useRoute();
const article = await apiManager.getArticleBySlug(route.params.slug);

useSeoMeta({
	title: article.data.title,
	ogTitle: article.data.title,
	description: article.data.description,
	ogDescription: article.data.description,
	ogImage: 'https://ferri.dev/' + article.data.thumbnail_path,
})

const articleMarkdown = await markdownParser.parse(
	"article-markdown",
	article.data.markdown,
	{breaks: true}
);


</script>

<style lang="scss" scoped>
.read-more-transition-leave-active {
	transition: opacity 250ms;
	opacity: 0;
}

.article {
	scroll-behavior: smooth;

	.banner {
		width: 100%;
		margin-top: -4.6rem;
		height: 50vh;
		background: var(--banner-url);
		background-size: cover;
		background-position: top;
		box-shadow: 0px 0px 30px -10px rgba(33, 17, 0, 1);
		//border-bottom: 1px solid $black-olive;
		border-bottom: 10px solid $flame;
	}

	.banner-fix {
		width: 100%;
		background-color: $floral-white;
		height: 2px;
		margin-top: -2px;
		margin-bottom: 2rem;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 60vw;
		max-width: 1000px;
		margin: 0 auto;
		padding: 4rem 0;
	}
}

@media screen and (max-width: 768px) {
	.article {
		.wrapper {
			width: 90vw;
		}
	}
}


</style>
  