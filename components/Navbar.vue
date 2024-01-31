<template>
	<div class="nav-wrapper">
		<nav id="nav">
			<div class="bar">
				<ul>
					<li>
						<NuxtLink to="/"><span class="route-name">Home</span></NuxtLink>
					</li>
					<li>
						<NuxtLink to="/articles"><span class="route-name">Articles</span></NuxtLink>
					</li>
					<li>
						<NuxtLink to="/"><img src="~/assets/images/icon.png"/><span class="route-name"><b
							class="name">Ferri</b></span></NuxtLink>
					</li>
				</ul>
			</div>
			<ShapeDivider :type="'waves-opacity'" :color="'#333'" :background-color="'clear'"/>
		</nav>
	</div>
</template>

<script>
import ShapeDivider from "~/components/ShapeDivider";

export default {
	name: "Navbar",
	components: {ShapeDivider},
	setup() {
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
		color: white;
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
		font-weight: inherit;
	}

	img {
		height: 65%;
	}

}


li a:hover {
	background-color: #141414;
}

li:not(:last-child) a.router-link-active:hover {
	background-color: rgb(187, 72, 27);
}
</style>
  