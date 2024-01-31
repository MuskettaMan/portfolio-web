<template>
	<div class="project">
		<Navbar/>
		<div class="banner" :style="`--banner-url: url(../../${data.project.banner_path});`"/>
		<div class="content">
			<header>
				<div class="content">
					<h2>{{ data.project.title }}</h2>
					<p class="description">{{ data.project.description }}</p>
				</div>
				<client-only>
					<ShapeDivider v-if="data.sections.length > 0" :type="'tilt'" :color="'#fffcf2'"
								  :background-color="getSectionTransitionColor(1)"/>
				</client-only>
			</header>


			<section v-for="(section, index) in markdownSections" :key="index" :class="{'uneven': index % 2 === 1}">
				<div class="content">
					<div class="text">
						<h3>{{ data.sections[index].title }}</h3>
						<ContentRenderer :value="section" class="description bg-dark"/>
					</div>
					<div class="img-wrapper">
						<img :src="`../../${data.sections[index].image_path}`" alt="">
					</div>
				</div>
				<client-only>
					<ShapeDivider v-if="index !== markdownSections.length - 1" :type="'waves-opacity'"
								  :color="getSectionBackgroundColor(index)"
								  :background-color="getSectionTransitionColor(index)"/>
				</client-only>
			</section>
		</div>
	</div>
</template>

<script setup>
import markdownParser from "@nuxt/content/transformers/markdown";

const route = useRoute();

const data = (await apiManager.getProjectBySlug(route.params.slug)).data;

useSeoMeta({
	title: data.project.title,
	description: data.project.description
})

const markdownSections = [];
for (let i = 0; i < data.sections.length; ++i) {
	markdownSections[i] = await markdownParser.parse('section-' + i, data.sections[i].description, {});
}

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
		margin-top: -3rem;
		margin-bottom: 2rem;
		height: 50vh;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, $floral-white 100%), var(--banner-url);
		background-size: cover;
		background-position: bottom;
	}

	.content {
		header {
			position: relative;

			.content {
				width: 75vw;
				margin: 0 auto;
				padding-bottom: 10rem;
			}

		}

		.description {
			margin-bottom: 5rem;
		}

		section {
			position: relative;
			background-color: #252422;


			&.uneven {
				background-color: #403D39;

				.content {
					flex-direction: row-reverse;
				}
			}

			.content {
				width: 75vw;
				display: flex;
				margin: 0 auto;
				padding-bottom: 10rem;
				padding-top: 5rem;
				gap: 2rem;

				.text {
					h3 {
						color: white;
					}

					flex: 3;
				}

				.img-wrapper {
					width: 100%;
					flex: 2;
					display: flex;
					align-items: flex-start;

					img {
						object-fit: contain;
						display: block;
						width: 100%;
						height: auto;
						border-radius: 5px;
						box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
					}
				}
			}
		}
	}
}


</style>