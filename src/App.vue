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


</style>
