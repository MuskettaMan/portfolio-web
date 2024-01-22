<template>
	<div class="nav-wrapper">
		<nav id="nav">
			<div class="bar">
				<ul>
					<li>
						<router-link to="/"><span class="route-name">Home</span></router-link>
					</li>
					<li>
						<router-link to="/articles"><span class="route-name">Articles</span></router-link>
					</li>
					<li>
						<router-link to="/"><img :src="icon"/><span class="route-name"><b
							class="name">Ferri</b></span></router-link>
					</li>
				</ul>
			</div>
			<ShapeDivider :type="'waves-opacity'" :color="'#333'" :background-color="'clear'"/>
		</nav>
	</div>
</template>

<script>
import ShapeDivider from "@/components/ShapeDivider";

export default {
	name: "Navbar",
	components: {ShapeDivider},
	setup() {
		const icon = require('@/assets/images/favicon-32x32.png');

		return {
			icon
		}
	}
}
</script>

<style scoped lang="scss">

.nav-wrapper {
	height: 5.5rem;
	position: relative;

}

nav {
	width: 100%;
	z-index: 1;
	position: fixed;
	height: 10rem;
	pointer-events: none;

	.shape-divider {
		top: 3.5rem;
		z-index: 10;
		transform-origin: top;
		transform: scaleY(30%);
	}
}

.bar {
	background-color: #333;
	height: 3.5rem;
	pointer-events: auto;
}

ul {
	display: flex;
	gap: 0.5rem;
	list-style-type: none;
	margin: 0;
	padding: 0 1rem;
	overflow: hidden;
}

li {
	height: 3rem;
}

li a {
	display: block;
	color: white;
	text-align: center;
	padding: 0px 16px;
	text-decoration: none;
	height: 100%;
	display: flex;
	gap: 1rem;
	border-radius: 0px 0px 8px 8px;
	transition: background-color 0.2s ease-in-out;

	.route-name,
	img {
		margin: auto;

		.name {
			font-size: 1.3rem;
		}
	}
}

li a.router-link-active {
	background-color: $flame;
	font-weight: bold;
}

li:last-child {
	margin-left: auto;

	a {
		background-color: inherit;

	}

	img {
		height: 50%;
	}

}


li a:hover {
	background-color: #141414;
}

li:not(:last-child) a.router-link-active:hover {
	background-color: rgb(187, 72, 27);
}
</style>
  