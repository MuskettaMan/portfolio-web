<template>
	<section :style="style" class="portfolio-mention">
		<div class="content-wrapper">
			<div class="content">
				<div class="text-wrapper">
					<div class="header">
						<h2>{{ data.title }}</h2>
						<div class="tags">
							<span class="tag" v-for="(tag, index) in data.tags" :key="index"><ProjectTag
								:message="tag"/>&nbsp; </span>
						</div>
					</div>
					<p>{{ data.description }}</p>
				</div>
				<div class="image-wrapper">
					<img :src="`/${data.thumbnail_path}`" alt="">
				</div>

				<CTAButton :link="`/project/${getRoute(data)}/`" :text="'Read more'"/>
			</div>
		</div>
		<client-only v-if="!last">
			<ShapeDivider :type="divider" :color="transitionColor" :background-color="nextBackgroundColor"/>
		</client-only>
	</section>
</template>

<script>
import {computed, ref} from "vue";
import ShapeDivider from "~/components/ShapeDivider";
import {dividers} from "~/components/ShapeDivider";
import ProjectTag from "~/components/ProjectTag";
import slugify from "slugify";

export default {
	name: "PortfolioMention",
	components: {ProjectTag, ShapeDivider},
	props: {
		data: {
			type: Object,
			required: true
		},
		backgroundColor: {
			type: String,
			required: true
		},
		nextBackgroundColor: {
			type: String,
			required: true
		},
		transitionColor: {
			type: String,
			required: true
		},
		last: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	setup(props, context) {
		const style = computed(() => {
			return `--background-color: ${props.backgroundColor};`
		})

		const getRandomDivider = () => {
			return dividers[Math.floor(Math.random() * dividers.length)];
		}

		const divider = ref(getRandomDivider())
		const getRoute = (data) => {
			return slugify(data.title, {lower: true});
		}

		props.data.tags = props.data.tags.split(', ');
		if (props.data.tags.length === 1 && props.data.tags[0] === "")
			props.data.tags = [];

		props.data.tags.sort();

		for (let i = 0; i < props.data.tags.length; ++i) {
			props.data.tags[i] = props.data.tags[i].trim().toUpperCase();
		}


		return {
			style,
			divider,
			getRoute
		}
	}
}
</script>

<style scoped lang="scss">
.portfolio-mention {
	position: relative;
	background-color: var(--background-color);
	display: flex;
	padding: 2rem 10rem 8rem;

	.content-wrapper {
		min-height: 55vh;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;

		.content {
			display: grid;
			grid-template-rows: auto auto auto;
			grid-template-columns: 1fr 1fr;

			width: 100%;

			.cta-button {
				grid-column-start: 1;
				grid-column-end: 2;
				display: block;
				margin-top: 2rem;
			}

			.text-wrapper {
				height: fit-content;

				.header {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;


					.tags {
						white-space: break-spaces;
						overflow-wrap: break-word;

						line-height: 2rem;
					}

					.link-header {
						margin-bottom: 3rem;
					}

				}

				p {
					line-height: 1.5rem;
					margin-bottom: 0;
				}

				p, h2 {
					color: white;
				}

			}

			.image-wrapper {
				grid-column-start: 2;
				grid-column-end: 3;
				grid-row-start: 1;
				grid-row-end: 4;

				img {
					width: 33vw;
					object-fit: cover;
					display: block;
					float: right;
					height: 100%;
					border-radius: 5px;
					opacity: .95;
					filter: drop-shadow(4px 4px 8px rgba(black, 0.3));
				}
			}
		}
	}
}

@media (prefers-reduced-motion: reduce) {
	.portfolio-mention .content-wrapper .content .text-wrapper .read-more .effect {
		transition: none;
	}
}

@media only screen and (max-width: 1410px) {
	.portfolio-mention {
		padding: 2rem 4rem 8rem;
	}
}

@media only screen and (max-width: 1000px) {
	.portfolio-mention {
		padding: 1rem 2rem 7rem;

		.content-wrapper {
			.content {
				margin-bottom: 2rem;
				grid-template-rows: auto auto auto;
				grid-template-columns: 1fr;

				.text-wrapper {
					max-width: 100%;

					.header {
						h2 {
							margin-bottom: 1rem;
						}
					}

				}

				.read-more {
					margin: 1rem auto 0;
				}

				.image-wrapper {
					grid-column-start: auto;
					grid-column-end: auto;
					grid-row-start: auto;
					grid-row-end: auto;

					img {
						float: none;
						width: 100%;
					}
				}
			}
		}
	}
}

@media only screen and (max-width: 600px) {
	.portfolio-mention {
		.content-wrapper {
			.content {
				.image-wrapper {
					img {
						width: 100%;
					}
				}
			}
		}
	}
}
</style>
