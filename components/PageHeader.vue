<template>
	<header class="page-header">
		<p>Hi, my name is</p>
		<h1>Ferri de Lange</h1>
		<p>I enjoy low-level graphics and game development</p>
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
	margin: 0 10rem 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 40vh;
	justify-content: center;
	position: relative;

	p {
		font-size: 2rem;
		margin: 0;
	}

	h1 {
		font-size: 6rem;
	}
}

@media only screen and (max-width: 1000px) {
	.page-header {
		margin: 0 2rem 0;
		height: 30vh;

		p {
			font-size: 1.6rem;
		}

		h1 {
			font-size: 4.0rem;
		}
	}
}

@media only screen and (max-width: 600px) {
	.page-header {
		margin: 0 2rem 0;
		height: 30vh;

		p {
			font-size: 1.2rem;
		}

		h1 {
			font-size: 3.0rem;
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
