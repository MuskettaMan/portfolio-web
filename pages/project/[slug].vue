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


			<ContentRenderer :value="projectMarkdown" class="article-body"/>
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

const getSectionBackgroundColor = (index) => {
	return index % 2 === 1 ? '#403D39' : '#252422'
}

const getSectionTransitionColor = (index) => {
	return index % 2 === 0 ? '#403D39' : '#252422'
}
</script>

<style lang="scss">

.project {
	.banner {
		width: 100%;
		margin-top: -4.6rem;
		margin-bottom: 2rem;
		height: 50vh;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, $floral-white 100%), var(--banner-url);
		background-size: cover;
		background-position: center;
	}

	.content {
		width: 60vw;
		margin: 0 auto;

		header {
			position: relative;

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