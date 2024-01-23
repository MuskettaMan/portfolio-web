<template>
	<div class="home">
		<div class="wrapper">
			<Navbar></Navbar>
			<PageHeader/>
			<PortfolioFooter ref="footer"
							 :transition-color="'#fffcf2ff'/*getSectionTransitionColor(sections.length - 1)*/"/>
			<ScrollDownButton v-if="projects" :targets="sections"/>
			<PortfolioMention v-if="projects" v-for="(item) in projects" :key="item.id"
							  :ref="el => { sections[item.id] = el }" :data="item"
							  :background-color="getSectionBackgroundColor(item.id)"
							  :next-background-color="getSectionBackgroundColor(item.id + 1)"
							  :transition-color="getSectionTransitionColor(item.id)"/>
		</div>
	</div>
</template>

<script>
import Navbar from "~/components/Navbar";
import PageHeader from "~/components/PageHeader";
import PortfolioMention from "~/components/PortfolioMention";
import {onMounted, ref, watch} from "vue";
import ScrollDownButton from "~/components/ScrollDownButton";
import PortfolioFooter from "~/components/PortfolioFooter";

export default {
	name: 'HomeView',
	title: "Ferri's Portfolio",
	components: {
		PortfolioFooter,
		ScrollDownButton,
		PageHeader,
		PortfolioMention,
		Navbar
	},
	setup() {
		const sections = ref([]);
		const footer = ref(null);

		const readMoreData = ref(null);
		const projects = ref([]);

		apiManager.getProjects().then((result) => {
			projects.value = result.data;
		});

		const getSectionBackgroundColor = (index) => {
			return index % 2 === 0 ? '#403d39' : '#252422'
		}

		const getSectionTransitionColor = (index) => {
			return index % 2 === 0 ? '#403d39' : '#252422'
		}

		onMounted(() => sections.value.splice(0, 0, footer.value))

		return {
			sections,
			projects,
			getSectionBackgroundColor,
			getSectionTransitionColor,
			footer,
			readMoreData
		}
	}
}
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
