<template>
	<div class="home">
		<div class="wrapper">
			<PageHeader/>
			<PortfolioAboutMe ref="section"
							  :transition-color="'#fffbf8'"/>
			<section id="projects">
				<PortfolioMention v-for="(item, index) in projects" :key="item.id"
								  :ref="el => { sections[item.id] = el }" :data="item"
								  :background-color="getSectionBackgroundColor(index)"
								  :next-background-color="getSectionBackgroundColor(index + 1)"
								  :transition-color="getSectionTransitionColor(index)"
								  :last="index === projects.length - 1"/>
			</section>
		</div>
	</div>
</template>

<script setup>
import {onMounted, onBeforeUnmount, onUnmounted, ref} from "vue";
import {useMainStore} from "~/store/index.js";

useSeoMeta({
	title: 'Home',
	description: 'Home page of my portfolio website',
	keywords: 'portfolio, home, home page, home page portfolio, portfolio home page, ferri, ferri de lange, developer, game developer'
})

const sections = ref([]);
const footer = ref(null);

const store = useMainStore();

const projects = (await apiManager.getProjects()).data;
const getSectionBackgroundColor = (index) => {
	return index % 2 === 0 ? '#403d39' : '#252422'
}

const getSectionTransitionColor = (index) => {
	return index % 2 === 0 ? '#403d39' : '#252422'
}

const onScroll = () => {
	const projectEl = document.getElementById('projects');
	const top = projectEl.offsetTop;
	const scrollPosition = window.scrollY;

	store.setInProjects(scrollPosition >= top)
}

onMounted(() => sections.value.splice(0, 0, footer.value))
onMounted(() => window.addEventListener('scroll', onScroll));
onMounted(() => onScroll());
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
onUnmounted(() => store.setInProjects(false));

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
