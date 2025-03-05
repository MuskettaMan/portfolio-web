<template>
	<header class="page-header">
		<div class="wrapper">
			<div class="intro">
				<p>Hi, my name is</p>
				<h1>Ferri de Lange</h1>
				<p>Low-level graphics and game development</p>
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

			p {
				font-size: 1.75rem;
				margin: 0;
			}

			h1 {
				font-size: 5rem;
			}
		}

		.model {
			width: 30%;
      max-width: 350px;
			margin-left: 5rem;
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
				p {
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

				p {
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
