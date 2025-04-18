<template>
	<div class="nav-wrapper">
		<nav id="nav">
			<div class="bar">
				<ul>
					<li>
						<NuxtLink :class="{'no-highlight': store.isInProjects}" to="/"><span
							class="route-name">Home</span></NuxtLink>
					</li>
					<li>
						<NuxtLink :class="{'no-highlight': !store.isInProjects}" to="/#projects"><span
							class="route-name">Projects</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/articles"><span class="route-name">Articles</span></NuxtLink>
					</li>
					<li>
            <div class="socials">
              <a href="mailto:ferri@ferri.dev" target="_blank">
                <font-awesome-icon icon="envelope"/>
              </a>
              <a href="https://www.linkedin.com/in/ferri-de-lange/" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']"/>
              </a>
              <a href="https://github.com/MuskettaMan" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']"/>
              </a>
              <a href="ferri-de-lange.bsky.social" target="_blank">
                <font-awesome-icon :icon="['fab', 'bluesky']"/>
              </a>
            </div>
						<NuxtLink class="no-highlight home" to="/"><img src="~/assets/images/icon.png"/><span
							class="route-name"><b
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
import {useMainStore} from "~/store/index.js";
import NiceModel from "~/components/NiceModel.vue";

export default {
	name: "Navbar",
	components: {NiceModel, ShapeDivider},
	async setup() {
		const store = useMainStore();

		return {
			store,
		}
	}
}
</script>

<style scoped lang="scss">

.nav-wrapper {
	position: relative;
	margin-bottom: 8rem;
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
  background: radial-gradient(circle at top left, rgb(44, 30, 23) 0%, rgba(37, 36, 34, 1) 100%);
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
	margin-bottom: 1rem;
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
	transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;


	.route-name,
	img {
		color: white;
		margin: auto;

		.name {
			font-size: 1.3rem;
		}
	}
}

li a.router-link-active:not(.no-highlight) {
	background-color: $flame;
	font-weight: bold;
	box-shadow: 0 4px 8px rgba($flame, 0.5);
}

li:last-child {
	margin-left: auto;
  display: flex;

	a {
		background-color: inherit;
		font-weight: inherit;
		box-shadow: inherit;
	}

	img {
		height: 65%;
	}

}


li a.home:hover {
	background-color: #141414;
}

li:not(:last-child) a.router-link-active:hover:not(.no-highlight) {
	background-color: rgb(210, 86, 33);
	box-shadow: 0 4px 8px rgba($flame, 0.7);
}

.socials {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  a {
    padding: 0;
    height: fit-content;
    color: white;
    text-decoration: none;
  }
}

.socials a {
  font-size: 1.5rem;
  transition: color 0.2s, transform 0.3s;

  &:hover {
    color: #eb5e28;
    transform: scale(1.2);
  }
}

@media screen and (max-width: 600px) {
	.bar {
		height: 4rem;
	}

	ul {
		padding: 0 0.5rem;
	}

	li a {
		padding: 0px 8px;

		.route-name,
		img {
			font-size: 1rem;
		}
	}

	li:last-child {
		img {
			height: 50%;
		}
	}

}

@media screen and (max-width: 500px) {

  .socials {
    display: none;
  }
}
</style>
  