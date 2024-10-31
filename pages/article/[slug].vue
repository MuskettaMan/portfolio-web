<template>
	<div class="article">
		<div class="banner" :style="`--banner-url: url(../../${article.data.banner_path});`"/>
		<div class="banner-fix"/>
		<div class="wrapper">
			<div class="article-body">
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
		margin-top: -4.5rem;
		height: 50vh;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, $floral-white 100%), var(--banner-url);
		background-size: cover;
		background-position: top;
		border-bottom: 0;
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
  