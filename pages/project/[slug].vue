<template>
	<div class="project">
		<div class="banner" :style="`--banner-url: url(../../${project.data.banner_path});`"/>
		<div class="content-wrapper">
			<div class="content">
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
			<ProjectTable :title="project.data.title" :details="details"/>
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

const timeFrame = () => {
	const start = new Date(project.data.start_date);
	const end = new Date(project.data.end_date);

	// Array of month names for formatting
	const monthNames = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	// Extract the year and month
	const startYear = start.getFullYear();
	const startMonth = monthNames[start.getMonth()];

	const endYear = end.getFullYear();
	const endMonth = monthNames[end.getMonth()];

	// Return the formatted time frame
	return `${startYear} ${startMonth} - ${endYear} ${endMonth}`;
}

const details = {};
details['timeFrame'] = timeFrame();
if (project.data.project_type)
	details['projectType'] = project.data.project_type;
if (project.data.school_year)
	details['schoolYear'] = project.data.school_year;
if (project.data.repository_url)
	details['githubLink'] = project.data.repository_url;
if (project.data.programming_language)
	details['programmingLanguage'] = project.data.programming_language;
if (project.data.graphics_backend)
	details['graphicsBackend'] = project.data.graphics_backend;
if (project.data.team_size)
	details['teamSize'] = project.data.team_size;
if (project.data.role)
	details['role'] = project.data.role;
if (project.data.product_page)
	details['productPage'] = project.data.product_page;

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

	.content-wrapper {
		display: flex;

		.content {
			width: 60vw;
			max-width: 1000px;
			margin: 0 auto;

			.description {
				margin-bottom: 5rem;
			}
		}

		.project-container {
			height: fit-content;
			max-width: 30vw;
			width: auto;
			margin-right: 2rem;
		}
	}
}

@media (max-width: 1200px) {
	.project {
		.content-wrapper {
			flex-direction: column-reverse;

			.content {
				width: 80vw;
			}

			.project-container {
				margin: 0 auto;
				max-width: initial;
				width: 80vw;
			}
		}
	}
}

@media (max-width: 900px) {
	.project {
		.content-wrapper {

			.content {
				width: 90vw;
			}

			.project-container {
				margin: 0 auto;
				width: 90vw;
			}
		}
	}
}

</style>