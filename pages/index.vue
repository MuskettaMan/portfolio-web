<template>
	<div class="home">
		<div class="wrapper">
			<Navbar></Navbar>
			<PageHeader/>
			<PortfolioFooter ref="footer"
							 :transition-color="'#fffcf2ff'"/>
			<PortfolioMention v-for="(item, index) in projects" :key="item.id"
							  :ref="el => { sections[item.id] = el }" :data="item"
							  :background-color="getSectionBackgroundColor(index)"
							  :next-background-color="getSectionBackgroundColor(index + 1)"
							  :transition-color="getSectionTransitionColor(index)"/>
		</div>
	</div>
</template>

<script setup>
import {onMounted, ref} from "vue";

useSeoMeta({
	title: 'Home',
	description: 'Home page of my portfolio website',
	keywords: 'portfolio, home, home page, home page portfolio, portfolio home page, ferri, ferri de lange, developer, game developer'
})

const sections = ref([]);
const footer = ref(null);

const projects = (await apiManager.getProjects()).data;
const getSectionBackgroundColor = (index) => {
	return index % 2 === 0 ? '#403d39' : '#252422'
}

const getSectionTransitionColor = (index) => {
	return index % 2 === 0 ? '#403d39' : '#252422'
}

onMounted(() => sections.value.splice(0, 0, footer.value))
</script>

<style lang="scss" scoped>
.home {
	scroll-behavior: smooth;

	.wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
	}
}
</style>
