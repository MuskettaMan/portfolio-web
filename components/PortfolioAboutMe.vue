<template>
	<section class="portfolio-about-me">
		<ShapeDivider class="top" type="curve" :color="transitionColor" background-color="#00000000"/>
		<div class="wrapper">
			<div class="about-me">
				<h2>Who am I</h2>
				<p>
					Hey, I'm Ferri, currently studying game programming at BUas, in my third year. I specialize in
					graphics programming, and enjoy working with C++ and Vulkan. I am currently looking for an internship for September 2025.
				</p>
				<p>Curious to know more? Have a look at my
					<nuxt-link to="/#projects">projects</nuxt-link>
					or take a look at one of my
					<nuxt-link to="/articles/">articles!</nuxt-link>
				</p>
				<span>
					<p>
						<a href="ferri-de-lange-resume.pdf" target="_blank" class="link-no-style">
						<font-awesome-icon icon="file-lines"/>
						Check out my
						<span class="url">resume</span>
						</a>
					</p>
				</span>
			</div>
			<div class="get-in-contact" id="reach-out">
				<h2>Reach out</h2>
				<span>
					<p>
						<a href="mailto:ferri@ferri.dev" target="_blank" class="link-no-style">
						<font-awesome-icon icon="envelope"/>
						Email me at <span class="url">ferri@ferri.dev</span>
							</a>
					</p>
				</span>
				<span>
					<p>
						<a href="https://github.com/MuskettaMan" target="_blank" class="link-no-style">
						<font-awesome-icon :icon="['fa-brands', 'github']"/>
						Find me on <span class="url">GitHub</span>
							</a>
					</p>
				</span>
				<span>
					<p>
						<a href="https://www.linkedin.com/in/ferri-de-lange" target="_blank" class="link-no-style">
						<font-awesome-icon :icon="['fa-brands', 'linkedin']"/>
						Connect with me on <span class="url">LinkedIn</span>
						</a>
					</p>
				</span>
				<span>
					<p>
						<a href="https://bsky.app/profile/ferri-de-lange.bsky.social" target="_blank" class="link-no-style">
						<font-awesome-icon :icon="['fab', 'bluesky']"/>
						Follow me on <span class="url">twitter</span>
						</a>
					</p>
				</span>
			</div>
		</div>
		<img src="~/assets/images/portrait_03.jpg" class="portrait"/>
	</section>
</template>

<script>
import ShapeDivider from "~/components/ShapeDivider";
import {computed, onMounted, onUnmounted, ref} from "vue";

export default {
	name: "PortfolioAboutMe",
	components: {ShapeDivider},
	props: {
		transitionColor: {
			type: String,
			required: true
		}
	},
	setup() {

		return {}
	}
}
</script>

<style lang="scss" scoped>
.portfolio-about-me {
	position: relative;
	padding: 12rem 10rem 12rem;
	background: rgb(255, 242, 235);
	background: linear-gradient(0deg, rgba(255, 242, 235, 1) 0%, rgb(238, 234, 226) 100%);

	overflow: hidden;

	.link-no-style {
		color: inherit;
		text-decoration: none;
	}

	svg {
		height: 1.3rem;
		margin-right: 0.5rem;
		margin-bottom: -0.075rem;
		transition: transform 0.2s ease-in-out;

		&:hover {
			transform: scale(1.25);
		}
	}

	.portrait {
		position: absolute;
		transform-origin: bottom;
		transform: scaleX(-1) scale(0.9);
		right: 5vw;
		bottom: 0;
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	.shape-divider.top {
		top: 0;
	}

	.wrapper {
		position: relative;
		width: 80%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 5rem;

		.about-me {
			h2 {
				margin-bottom: 3rem;
			}
		}

		.get-in-contact {
			h2 {
				margin-bottom: 3rem;
			}

			width: fit-content;

		}
	}

	.url {
		color: $flame;
		text-decoration: underline;
	}
}

@media only screen and (max-width: 1100px) {
	.portfolio-about-me {
		padding: 11rem 2rem 26rem;

		.portrait {
			height: 400px;
			left: 50%;
			transform: translateX(-50%) scaleX(-1);
			bottom: 1rem;
		}

		.wrapper {
			display: flex;
			flex-direction: column;
			margin-bottom: 3.5rem;
			gap: 2rem;
			width: 100%;

			.about-me {
				h2 {
					margin-bottom: 1rem;
				}
			}

			.get-in-contact {
				h2 {
					margin-bottom: 1rem;
				}
			}
		}
	}
}
</style>
