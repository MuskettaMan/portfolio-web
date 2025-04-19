<template>
	<div class="project">
		<div class="banner" :style="`--banner-url: url(../../${project.data.banner_path});`"/>
    <ProjectTable :title="project.data.title" :details="details"/>
		<div class="content-wrapper">
			<div class="content">
				<div class="article-body">
					<h1>{{ projectMarkdown.title }}</h1>
					<ContentRenderer :value="projectMarkdown"/>
				</div>
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

const timeFrame = () => {
	const start = new Date(project.data.start_date);
	const end = new Date(project.data.end_date);

	// Array of month names for formatting
	const monthNames = [
		'Jan. ', 'Feb. ', 'Mar. ', 'Apr. ', 'May ', 'Jun. ',
		'Jul. ', 'Aug. ', 'Sep. ', 'Oct. ', 'Nov. ', 'Dec. '
	];

	// Extract the year and month
	const startYear = start.getFullYear();
	const startMonth = monthNames[start.getMonth()];

	const endYear = end.getFullYear();
	const endMonth = monthNames[end.getMonth()];

	// Return the formatted time frame
	return `${startMonth} ${startYear} – ${endMonth} ${endYear}`;
}

const details = { general: {}, technical: {}, product: {}, team: {} };
details.general['timeFrame'] = timeFrame();
if (project.data.school_year)
  details.general['schoolYear'] = project.data.school_year;
if (project.data.project_type)
	details.team['projectType'] = project.data.project_type;
if (project.data.team_size && project.data.team_size > 1)
  details.team['teamSize'] = project.data.team_size;
if (project.data.role)
  details.team['role'] = project.data.role;
if (project.data.programming_language)
	details.technical['programmingLanguage'] = project.data.programming_language;
if (project.data.graphics_backend)
	details.technical['graphicsBackend'] = project.data.graphics_backend;
if (project.data.repository_url)
  details.product['githubLink'] = project.data.repository_url;
if (project.data.product_page)
	details.product['productPage'] = project.data.product_page;

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

  .project-container {
    height: fit-content;
    width: 90vw;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

	.content-wrapper {
		display: flex;
		justify-content: center;

		.content {
			width: 60vw;
			max-width: 1000px;

			.description {
				margin-bottom: 5rem;
			}
		}
	}
}

@media (max-width: 1200px) {
	.project {

    .project-container {
    }
		.content-wrapper {
			flex-direction: column-reverse;

			.content {
				width: 80vw;
				margin: 0 auto;
			}

		}
	}
}

@media (max-width: 900px) {
	.project {

    .project-container {
    }
		.content-wrapper {

			.content {
				width: 90vw;
			}
		}
	}
}

</style>