<template>
  <div class="home">
    <div class="wrapper">
      <PageHeader/>
      <ScrollDownButton :targets="sections" />
      <PortfolioMention
          v-for="(item, index) in json"
          :key="index"
          :ref="el => { sections[index] = el }"
          :title="item.title"
          :description="item.description"
          :image-url="require(`@/assets/images/${item.imageUrl}`)"
          :color="getSectionBackgroundColor(index)"
          :background-color="getSectionTransitionColor(index)"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PortfolioMention from "@/components/PortfolioMention";
import json from "@/assets/content/portfolio.json";
import {useRoute} from "vue-router";
import {ref} from "vue";
import ScrollDownButton from "@/components/ScrollDownButton";

export default {
  name: 'HomeView',
  components: {
    ScrollDownButton,
    PageHeader,
    PortfolioMention
  },
  setup() {
    const sections = ref([])
    const route = useRoute();

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


    return {
      json,
      sections,
      getSectionBackgroundColor,
      getSectionTransitionColor
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
