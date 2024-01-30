<template>
	<div class="home">
		<div class="wrapper">
			<Navbar></Navbar>
			<PageHeader/>
			<PortfolioFooter ref="footer"
							 :transition-color="'#fffcf2ff'"/>
			<ScrollDownButton v-if="projects" :targets="sections"/>
			<PortfolioMention v-if="projects" v-for="(item) in projects" :key="item.id"
							  :ref="el => { sections[item.id] = el }" :data="item"
							  :background-color="getSectionBackgroundColor(item.id)"
							  :next-background-color="getSectionBackgroundColor(item.id + 1)"
							  :transition-color="getSectionTransitionColor(item.id)"/>
		</div>
	</div>
</template>

<script setup>
import {onMounted, ref} from "vue";

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
