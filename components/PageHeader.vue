<template>
	<header class="page-header">
		<div class="intro">
			<p>Hi, my name is</p>
			<h1>Ferri de Lange</h1>
			<p>I enjoy low-level graphics and game development</p>
		</div>
		<div class="model">
			<!--			<NiceModel/>-->
		</div>
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
	display: flex;
	justify-content: space-between;
	margin: 0 10rem 0;
	min-height: 40vh;

	.intro {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		position: relative;
		width: 70%;

		p {
			font-size: 2rem;
			margin: 0;
		}

		h1 {
			font-size: 6rem;
		}
	}

	.model {
		width: 30%;
	}
}

@media only screen and (max-width: 1100px) {
	.page-header {
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

@media only screen and (max-width: 600px) {
	.page-header {
		margin: 0 2rem 0;
		flex-direction: column;

		.intro {
			p {
				font-size: 1.2rem;
			}

			h1 {
				font-size: 3.0rem;
			}
		}

		.model {
			width: 100%;
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
