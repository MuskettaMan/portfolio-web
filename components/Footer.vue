<template>
	<footer class="footer">
		<div class="content">
			<div class="footer-wrapper">
				<div class="footer-logo">
					<nuxt-link to="/">
						<img src="~/assets/images/icon.png" alt="Ferri's Portfolio"/>
					</nuxt-link>
				</div>
				<div class="footer-sections">
					<div class="footer-content">
						<div class="footer-links">
							<nuxt-link to="/">Home</nuxt-link>
							<nuxt-link to="/#projects">Projects</nuxt-link>
							<nuxt-link to="/articles">Articles</nuxt-link>
							<a href="mailto:ferr@ferri.dev" target="_blank">Contact</a>
							<a href="/ferri-de-lange-resume.pdf" target="_blank">Resume</a>
						</div>
					</div>
					<div class="footer-socials">
						<a href="https://www.linkedin.com/in/ferri-de-lange/" target="_blank">
							<font-awesome-icon :icon="['fab', 'linkedin']"/>
						</a>
						<a href="https://github.com/MuskettaMan" target="_blank">
							<font-awesome-icon :icon="['fab', 'github']"/>
						</a>
						<a href="https://twitter.com/ferri_de_lange" target="_blank">
							<font-awesome-icon :icon="['fab', 'x-twitter']"/>
						</a>
						<client-only>
							<span class="copyright">Copyright © 2020-{{ currentYear }} Ferri de Lange</span>
						</client-only>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import {computed} from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped lang="scss">
.footer {
	background-color: #333;
	color: white;
	padding: 4rem 0;
	border-top: 1px solid #8d7c7c;
}

.content {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.footer-sections {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.footer-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 0 2rem;
}

.footer-content {
	display: flex;
	align-items: center;
	gap: 2rem;
}

.footer-logo {
	margin-right: 2rem;
}

.footer-links {
	display: flex;
	gap: 2rem;

	a {
		color: white;
		text-decoration: none;
	}
}

.footer-socials {
	display: flex;
	gap: 1rem;

	a {
		color: white;
		text-decoration: none;
	}
}

.footer-socials a {
	font-size: 1.5rem;
	transition: color 0.2s, transform 0.3s;

	&:hover {
		color: #eb5e28;
		transform: scale(1.2);
	}
}

.footer-logo img {
	width: 80px;
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.1);
	}
}

.footer-links a:hover {
	color: #eb5e28;
}

.footer-links a::after {
	content: "";
	display: block;
	width: 0;
	height: 2px;
	background-color: #eb5e28;
	transition: width 0.3s;
}

.footer-links a:hover::before {
	width: 100%;
}

.footer-content a {
	position: relative;
}

.footer-content a::before {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 2px;
	background-color: #eb5e28;
	transition: width 0.3s;
}

.copyright {
	font-size: 0.8rem;
	color: #7F848E;
	margin: 0.8rem 0 0;
	margin-left: auto;
}

// mobile responsiveness
@media only screen and (max-width: 1000px) {
	.footer {
		padding: 2rem 0;
	}

	.footer-logo {
		margin-right: 0;
	}

	.footer-wrapper {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.footer-content {
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}

	.footer-logo {
		margin-bottom: 2rem;
	}

	.footer-links {
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}

	.footer-socials {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}

	.footer-socials a {
		font-size: 1.2rem;
	}
	.copyright {
		text-align: center;
		margin: 0.5rem 0 0;
		margin-left: auto;
	}
}

</style>