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
							<a href="mailto:ferr@ferri.dev">Contact</a>
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
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>

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

</style>