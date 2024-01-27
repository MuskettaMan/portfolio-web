<template>
	<div class="article">
		<Navbar></Navbar>
		<div class="banner" :style="`--banner-url: url(../../${article.data.banner_path});`" alt=""/>
		<div class="wrapper">
			<div class="article-body">
				<ContentRenderer :value="content"/>
			</div>
		</div>
	</div>
</template>

<script setup>
import Navbar from "~/components/Navbar";
import {useRoute} from "vue-router";

const route = useRoute();
const article = await apiManager.getArticleBySlug(route.params.slug);

const {data: content} = await useFetch(() => '/api/transform', {
	method: 'POST',
	body: {
		markdown: article.data.markdown
	}
})

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
		margin-top: -3rem;
		height: 50vh;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, $floral-white 100%), var(--banner-url);
		background-size: cover;
		background-position: bottom;
		margin-bottom: 2rem;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 60vw;
		margin: 0 auto;
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
  