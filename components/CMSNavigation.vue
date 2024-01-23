<template>
	<div class="cms-nav-wrapper">
		<nav id="nav">
			<div class="bar">
				<ul>
					<li>
						<router-link to="/cms"><span class="route-name">CMS Home</span></router-link>
					</li>
					<li>
						<router-link to="/cms/articles"><span class="route-name">Edit Articles</span></router-link>
					</li>
					<li>
						<router-link to="/cms/projects"><span class="route-name">Edit Projects</span></router-link>
					</li>
					<li v-if="loggedIn">
						<button @click="logout">Logout</button>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
import {useMainStore} from "~/store/index.js";
import {computed} from 'vue'
import {useRouter} from "vue-router";

export default {
	name: "CMS Navigation",
	components: {},
	setup() {
		const store = useMainStore();
		const loggedIn = computed(() => store.isAuthenticated);
		const router = useRouter();

		const logout = () => {
			store.logout();

			router.push({name: 'login'});
		}

		return {
			loggedIn,
			logout
		}
	}
}
</script>

<style scoped lang="scss">

.cms-nav-wrapper {
	height: calc(100vh - 6rem);
	width: 15rem;
	margin-right: 2rem;

	nav {
		position: absolute;
		top: 0;
		width: 15rem;
		z-index: 0;
		height: calc(100vh - 5rem);
		pointer-events: none;

		.shape-divider {
			top: 3.5rem;
			z-index: 10;
			transform-origin: top;
			transform: scaleY(30%);
		}
	}

	.bar {
		padding-top: 5rem;
		background-color: #333;
		height: 100%;
		pointer-events: auto;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		list-style-type: none;
		margin: 0;
		overflow: hidden;
		height: 100%;
		padding: 0;
	}

	li {
		height: 3rem;

		button {
			display: block;
			width: 100%;
			padding: 10px;
			background-color: $flame;
			color: #fff;
			border: none;
			border-radius: 3px;
			cursor: pointer;
			font-size: 16px;
			margin-top: 6px;
		}
	}

	li a {
		display: block;
		color: white;
		text-align: center;
		text-decoration: none;
		height: 100%;
		width: 100%;
		display: flex;
		gap: 1rem;
		transition: background-color 0.2s ease-in-out;

		.route-name,
		img {
			margin: auto;

			.name {
				font-size: 1.3rem;
			}
		}
	}

	li a.router-link-exact-active {
		background-color: $flame;
		font-weight: bold;
	}

	li:last-child {
		margin-top: auto;

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

	li:not(:last-child) a.router-link-exact-active:hover {
		background-color: rgb(187, 72, 27);
	}

}


</style>
  