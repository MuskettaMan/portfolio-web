<template>
  <div class="home" :class="{'read-more-active': store.getters.isReadMoreActive}">
    <teleport to="head">
      <link rel="apple-touch-icon" sizes="180x180" :href="'apple-touch-icon.png'">
      <link rel="icon" type="image/png" sizes="32x32" :href="'favicon-32x32.png'">
      <link rel="icon" type="image/png" sizes="16x16" :href="'favicon-16x16.png'">
      <link rel="manifest" :href="'site.webmanifest'">
    </teleport>
    <div class="wrapper">
      <PageHeader/>
      <ScrollDownButton :targets="sections" />
      <PortfolioMention
          v-for="(item, index) in json"
          :key="index"
          :ref="el => { sections[index] = el }"
          :data="item"
          :background-color="getSectionBackgroundColor(index)"
          :transition-color="getSectionTransitionColor(index)"
      />
    </div>
    <PortfolioFooter ref="footer" :transition-color="getSectionTransitionColor(sections.length - 1)" />
    <ProjectReadMore v-if="store.getters.isReadMoreActive" :data="store.getters.readMoreData"/>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PortfolioMention from "@/components/PortfolioMention";
import json from "@/assets/content/portfolio.json";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import ScrollDownButton from "@/components/ScrollDownButton";
import PortfolioFooter from "@/components/PortfolioFooter";
import ProjectReadMore from "@/components/ProjectReadMore";
import {useStore} from "vuex";

export default {
  name: 'HomeView',
  title: "Ferri's Portfolio",
  components: {
    ProjectReadMore,
    PortfolioFooter,
    ScrollDownButton,
    PageHeader,
    PortfolioMention
  },
  setup() {
    const sections = ref([])
    const footer = ref(null)
    const route = useRoute();
    const store = useStore();

    let hasHash = route.hash === "";
    if(hasHash && (document.cookie === 'visited=false' || document.cookie === '')) {
      window.scrollTo(0, 0);
      setTimeout(() => document.cookie = "visited=true", 1)
    }

    const getSectionBackgroundColor = (index) => {
      return index % 2 === 0 ? '#403d39' : '#252422'
    }

    const getSectionTransitionColor = (index) => {
      if(index === 0)
        return '#fffcf2'

      return index % 2 === 1 ? '#403d39' : '#252422'
    }

    onMounted(() => sections.value.push(footer.value))

    return {
      json,
      sections,
      getSectionBackgroundColor,
      getSectionTransitionColor,
      footer,
      store
    }
  }
}
</script>

<style lang="scss" scoped>

.home {
  scroll-behavior: smooth;

  &.read-more-active {
    overflow-y: hidden;
  }
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }
}
</style>
