<template>
	<section class="portfolio-about-me">
		<ShapeDivider class="top" type="curve" :color="transitionColor" background-color="#00000000"/>
		<div class="wrapper">
			<div class="about-me">
				<h2>About me</h2>
				<p>
					Hey, I'm Ferri, currently studying programming at BUas. At the moment I'm head-deep in C++, engine
					development, and graphics programming.
					I've spent a solid 4 years crafting games in Unity, C# at multimedia company DTT.
				</p>
				<p>Curious to know more? Have a look at my
					<nuxt-link to="/#projects">projects</nuxt-link>
					or take a look at one of my
					<nuxt-link to="/articles">articles!</nuxt-link>
				</p>
				<br>
				<!--        <p>-->
				<!--          <fa-icon icon="file-pdf"/> <a href="@/assets/resume.pdf">Curriculum vitae</a>-->
				<!--        </p>-->
			</div>
			<div class="get-in-contact">
				<h2>Contact me</h2>
				<p>
					<font-awesome-icon icon="envelope"/>
					Email me at <a href="mailto:ferri@ferri.dev" target="_blank">ferri@ferri.dev</a></p>
				<p>
					<font-awesome-icon :icon="['fa-brands', 'github']"/>
					Find me on <a href="https://github.com/MuskettaMan" target="_blank">GitHub</a></p>
				<p>
					<font-awesome-icon :icon="['fa-brands', 'linkedin']"/>
					Connect with me on <a href="https://www.linkedin.com/in/ferri-de-lange" target="_blank">LinkedIn</a>
				</p>
				<p>
					<font-awesome-icon :icon="['fab', 'x-twitter']"/>
					Follow me on <a href="https://twitter.com/ferri_de_lange" target="_blank">twitter</a>
				</p>
			</div>
		</div>
		<img src="~/assets/images/portrait_03.jpg" class="portrait"/>
		<ShapeDivider class="bottom" type="tilt" color="#403d39" background-color="#00000000" :flip="true"/>
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
	background-color: #F3EFE4;

	overflow: hidden;

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

			p {
				margin-bottom: 0.3rem;


				svg {
					height: 1.3rem;
					margin-right: 0.5rem;
					margin-bottom: -0.075rem;
				}
			}
		}
	}
}


@media only screen and (max-width: 1000px) {
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
