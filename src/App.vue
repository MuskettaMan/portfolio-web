<template>
	<metainfo>
		<template v-slot:title="{ content }">{{ content ? `Ferri de Lange | ${content}` : `Ferri de Lange` }}</template>
	</metainfo>
	<header/>
	<router-view/>
	<footer/>
</template>

<script>
import {useStore} from "vuex";
import {watch} from "vue";
import {useRoute} from "vue-router";
import {useMeta} from "vue-meta";

export default {
	name: 'App',
	setup() {
		const store = useStore();
		const route = useRoute();
		watch(() => route.params.project, (curr) => {
			document.documentElement.style.overflow = curr && curr.length !== 0 ? 'hidden' : 'auto'
		})

		useMeta({
			title: 'Home',
			meta: [
				{
					name: 'description',
					content: 'Hey, my name is Ferri de Lange and I\'m a game developer. On this page you can find out more about me and what I do, I hope you enjoy!'
				},
				{
					property: 'og:title',
					content: 'Ferri de Lange | Home'
				},
				{
					property: 'og:site_name',
					content: 'Ferri de Lange'
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					name: 'robots',
					content: 'index,follow'
				}
			],
			htmlAttrs: {lang: 'en', amp: true}
		})
	}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
@import url('assets/_variables.scss');

body,
h1,
h2,
h3 {
	margin: 0;
	padding: 0;
}

p, li, ul, ol {
	font-size: 1.1rem;
	color: $black-olive;
	opacity: 0.9;
	font-family: 'Monsterrat', Helvetica, Arial, sans-serif;
}

ol, ul {
	opacity: 1;
}

h1 {
	font-family: 'Monsterrat', Helvetica, Arial, sans-serif;
	font-weight: 400;
	font-size: 3.5rem;
	opacity: 0.9;
}

h2 {
	font-family: 'Monsterrat', Helvetica, Arial, sans-serif;
	font-weight: 600;
	font-size: 3rem;
	opacity: 0.9;
}

h3 {
	font-family: 'Lato', Helvetica, Arial, sans-serif;
	font-weight: 600;
	font-size: 2.2rem;
	opacity: 0.9;
}

a {
	color: $flame;
}

a:visited {
	color: #9f380f;
}

button {
	font-family: 'Monsterrat', Helvetica, Arial, sans-serif;
	padding: 12px 20px;
	box-sizing: border-box;
	border: 2px solid #ccc;
	border-radius: 4px;
	background-color: $flame;
}

@media only screen and (max-width: 600px) {
	p {
		font-size: .9rem;
	}

	h1 {
		font-size: 2.45rem;
	}

	h2 {
		font-size: 2.25rem;
	}
}

#app {
	font-family: 'Lato', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: $floral-white;
	color: $eerie-black;
	min-height: 100vh;
}

.form-group {
	margin-bottom: 15px;
}

label {
	display: block;
	margin-bottom: 5px;
}

input,
textarea,
button {
	padding: 12px 20px;
	box-sizing: border-box;
	border: 2px solid #ccc;
	border-radius: 4px;
	background-color: #f8f8f8;
	font-size: 16px;
	font-family: 'Monsterrat', Helvetica, Arial, sans-serif;
}

textarea {
	padding: 12px 20px;
	box-sizing: border-box;
	border: 2px solid #ccc;
	border-radius: 4px;
	background-color: #f8f8f8;
	font-size: 16px;
	resize: none;
	height: 20rem;
}

button {
	background-color: $flame;
	color: white;
	border: none;
	cursor: pointer;
}

button:hover {
	filter: brightness(0.9);
}

</style>
