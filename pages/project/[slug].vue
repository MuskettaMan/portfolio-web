<template>
	<div class="project">
		<div class="banner" :style="`--banner-url: url(../../${project.data.banner_path});`"/>
		<div class="content">
			<header>
				<div class="content">
					<div class="tags">
							<span class="tag" v-for="(tag, index) in project.data.tags" :key="index"><ProjectTag
								:message="tag"/>&nbsp; </span>
					</div>
				</div>
			</header>

			<div class="article-body">
				<h1>{{ projectMarkdown.title }}</h1>
				<h3>Contents</h3>
				<ul class="toc">
					<li v-for="link of projectMarkdown.body.toc.links" :key="link.id">
						<a :href="`#${link.id}`">{{ link.text }}</a>
					</li>
				</ul>
				<ContentRenderer :value="projectMarkdown"/>
			</div>
		</div>
	</div>
</template>

<script setup>
import markdownParser from "@nuxt/content/transformers/markdown";

const route = useRoute();

let project = (await apiManager.getProjectBySlug(route.params.slug));

useSeoMeta({
	title: project.data.title,
	description: project.data.description
})


project.data.tags = project.data.tags.split(', ');
if (project.data.tags.length === 1 && project.data.tags[0] === "")
	project.data.tags = [];

project.data.tags.sort();

for (let i = 0; i < project.data.tags.length; ++i) {
	project.data.tags[i] = project.data.tags[i].trim().toUpperCase();
}
const projectMarkdown = await markdownParser.parse(
	"project-markdown",
	project.data.markdown,
	{breaks: true}
);

</script>

<style lang="scss">

.project {
	position: relative;

	.banner {
		width: 100%;
		margin-top: -4.6rem;
		margin-bottom: 2rem;
		height: 50vh;
		background: var(--banner-url);
		background-size: cover;
		background-position: center;
		box-shadow: 0px 0px 30px -10px rgba(33, 17, 0, 1);
		border-bottom: 3px solid $flame;
	}

	.content {
		width: 60vw;
		max-width: 1000px;
		margin: 0 auto;

		header {
			position: relative;
			margin: 1rem 0;
		}

		.tags {
			white-space: break-spaces;
			overflow-wrap: break-word;

			line-height: 2rem;
		}

		.description {
			margin-bottom: 5rem;
		}
	}
}

@media (max-width: 1200px) {
	.project {
		.content {
			width: 80vw;
		}
	}
}

@media (max-width: 900px) {
	.project {
		.content {
			width: 90vw;
		}
	}
}

</style>