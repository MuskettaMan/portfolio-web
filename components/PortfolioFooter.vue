<template>
	<footer class="portfolio-footer">
		<ShapeDivider class="top" type="curve" :color="transitionColor" background-color="#00000000"/>
		<div class="wrapper">
			<div class="about-me">
				<h2>About me</h2>
				<p>
					Hey, I'm Ferri, currently studying programming at BUas. At the moment I'm head-deep in C++, engine
					development, and trying to get into GPU programming.
					I've spent a solid 3 years crafting games in Unity, C# at multimedia company DTT. I'm driven to
					realize games and the tools for them.
				</p>
				<p>Curious to know more? Have a look at my projects or take a gander at my articles!</p>
				<br>
				<!--        <p>-->
				<!--          <fa-icon icon="file-pdf"/> <a href="@/assets/resume.pdf">Curriculum vitae</a>-->
				<!--        </p>-->
			</div>
			<div class="get-in-contact">
				<h2>Contact me</h2>
				<p>
					<font-awesome-icon icon="envelope"></font-awesome-icon>
					Email me at <a href="mailto:ferri@ferri.dev" target="_blank">ferri@ferri.dev</a></p>
				<p>
					<font-awesome-icon :icon="['fa-brands', 'github']"></font-awesome-icon>
					Find me on <a href="https://github.com/MuskettaMan" target="_blank">GitHub</a></p>
				<p>
					<font-awesome-icon :icon="['fa-brands', 'linkedin']"></font-awesome-icon>
					Connect with me on <a href="https://www.linkedin.com/in/ferri-de-lange" target="_blank">LinkedIn</a>
				</p>
			</div>
		</div>
		<img src="~/assets/images/portrait_03.jpg" class="portrait">
		<ShapeDivider class="bottom" type="tilt" color="#403d39" background-color="#00000000" :flip="true"/>
	</footer>
</template>

<script>
import ShapeDivider from "~/components/ShapeDivider";
import {computed, onMounted, onUnmounted, ref} from "vue";

export default {
	name: "PortfolioFooter",
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
.portfolio-footer {
	position: relative;
	padding: 12rem 10rem 12rem;
	background-color: #F3EFE4;

	overflow: hidden;

	.portrait {
		position: absolute;
		transform: scaleX(-1);
		right: 4rem;
		bottom: -2rem;
		mix-blend-mode: multiply;
	}

	.shape-divider.top {
		top: 0;
	}

	.wrapper {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 10rem;

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
					margin-right: 0.5rem;
				}
			}
		}
	}
}


@media only screen and (max-width: 1000px) {
	.portfolio-footer {
		padding: 11rem 2rem 22rem;

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
