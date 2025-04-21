<template>
	<section class="portfolio-about-me">
		<ShapeDivider class="top" type="curve" :color="transitionColor" background-color="#00000000"/>
		<div class="wrapper">
			<div class="about-me">
				<h2>Who am I</h2>
				<p>
					Hey, I'm Ferri, I'm a graphics programmer with multiple years of experience. I started as a Unity
					game developer and have since transitioned into low-level graphics.
					<br>
					<br>
					I'm currently in my third-year at Breda University of Applied Sciences, where I am working a year
					long project to create our own game engine. Here I am applying my graphics knowledge through Vulkan
					and help make our game look and stay optimized.
					<br>
					<br>
					I primarily know and use C++, but also have experience with different programming languages, like
					C#, python, and javascript.
					I also enjoy learning about new programming languages, for example, I'm currently learning about <a
					href="https://ziglang.org/" target="_blank">zig</a>!
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
						<span class="url">resume</span> here
						</a>
					</p>
				</span>
			</div>
			<div class="get-in-contact" id="reach-out">
				<h2>Reach out</h2>
				<span>
					<p>
						<a href="delange.fjm@gmail.com" target="_blank" class="link-no-style">
						<font-awesome-icon icon="envelope"/>
						Email me at <span class="url">delange.fjm@gmail.com</span>
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
						<a href="ferri-de-lange.bsky.social" target="_blank" class="link-no-style">
						<font-awesome-icon :icon="['fab', 'bluesky']"/>
						Follow me on <span class="url">bluesky</span>
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

	.url {
		color: $flame;
		text-decoration: underline;
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
}

@media only screen and (max-width: 1100px) {
	.portfolio-about-me {
		padding: 11rem 2rem 26rem;

		.portrait {
			height: 400px;
			left: 50%;
			transform: translateX(-50%) scaleX(-1);
			bottom: 0;
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
