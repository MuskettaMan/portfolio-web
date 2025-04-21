<template>
	<header class="page-header">
		<div class="wrapper">
			<div class="intro">
				<p class="subtext">Hi, my name is</p>
				<h1>Ferri de Lange</h1>
				<p class="subtext">Low-level graphics and game development</p>
				<p class="highlight">
					Open for <b>6-12 month internship</b> starting September.
          <a href="ferri-de-lange-resume.pdf" target="_blank" style="padding-left: 7px;" class="link-no-style">
          <font-awesome-icon icon="file-lines"/>
            <span style="text-decoration: underline; padding-left: 5px;">My resume</span>
          </a>
				</p>
        <p>
          I'm currently studying game programming at BUas, in my third year. I specialize in graphics programming, and enjoy working with C++ and Vulkan.
        </p>
			</div>
			<div class="model">
				<NiceModel/>
			</div>
		</div>

		<ShapeDivider class="bottom" type="tilt" color="#403d39" background-color="#00000000" :flip="true"/>
	</header>
</template>

<script>
import {ref} from "vue";
import {useRoute} from "vue-router";

export default {
	name: "PageHeader",
	setup() {
		const route = useRoute()

		return {}
	}
}
</script>

<style scoped lang="scss">
.page-header {
	width: 100%;
	position: relative;
	padding-bottom: 10rem;

  .link-no-style {
    color: inherit;
    text-decoration: none;
  }

  .url {
    color: $flame;
    text-decoration: underline;
  }

	.wrapper {
		display: flex;
		margin: 0 10rem 0;
		min-height: 20vh;

		.intro {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			justify-content: center;
			position: relative;
			width: 50%;

			.subtext {
				font-size: 1.75rem;
				margin: 0;
			}

			.highlight {
				width: fit-content;
				border-radius: 5px;
				padding: 2px 4px;
				color: white;
				background: $flame;
        box-shadow: grey 1px 1px 6px 1px;
			}

			h1 {
				font-size: 5rem;
			}
		}

		.model {
			width: 30%;
			max-width: 350px;
			margin: 0 auto;
		}
	}
}

@media only screen and (max-width: 1100px) {
	.page-header {
		padding-bottom: 10rem;

		.wrapper {

			margin: 0 2rem 0;
			min-height: 30vh;

			.intro {
				.subtext {
					font-size: 1.6rem;
				}

				h1 {
					font-size: 4.0rem;
				}
			}

			.model {
				height: 20rem;
			}
		}
	}
}

@media only screen and (max-width: 600px) {
	.page-header {
		.wrapper {

			margin: 0 2rem 0;
			flex-direction: column;

			.intro {
				width: 100%;

				.subtext {
					font-size: 1.2rem;
				}

				h1 {
					font-size: 3.0rem;
				}
			}

			.model {
				width: 80%;
				height: 50vw;
				margin: 0 auto;
				margin-top: 1rem;
			}
		}
	}
}

@keyframes enter {
	from {
		height: 100vh;
	}
	to {
		height: 60vh;
	}
}
</style>
