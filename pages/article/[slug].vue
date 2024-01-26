<template>
	<div class="article">
		<Navbar></Navbar>
		<div class="banner" style="--banner-url: url('../../assets/media/final.png');" alt=""/>
		<div v-if="article" class="wrapper">
			<Markdown class="article-body" :source="article.markdown"/>
		</div>
	</div>
</template>

<script>
import Navbar from "~/components/Navbar";
import {ref} from "vue";
import {useRoute} from "vue-router";
import Markdown from 'vue3-markdown-it';

export default {
	name: 'Article',
	title: "Ferri's Portfolio",
	components: {
		Navbar,
		Markdown
	},
	setup() {
		let article = ref();
		const route = useRoute();


		apiManager.getArticleBySlug(route.params.slug).then((result) => {
			article.value = result.data;
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
  