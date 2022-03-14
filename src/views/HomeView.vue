<template>
  <div class="home">
    <teleport to="head">
      <link rel="apple-touch-icon" sizes="180x180" :href="'apple-touch-icon.png'">
      <link rel="icon" type="image/png" sizes="32x32" :href="'favicon-32x32.png'">
      <link rel="icon" type="image/png" sizes="16x16" :href="'favicon-16x16.png'">
      <link rel="manifest" :href="'site.webmanifest'">
    </teleport>
    <div class="wrapper">
      <PageHeader/>
      <PortfolioFooter ref="footer" :transition-color="'#fffcf2ff'/*getSectionTransitionColor(sections.length - 1)*/" />
      <ScrollDownButton :targets="sections" />
      <PortfolioMention
          v-for="(item, index) in json"
          :key="index"
          :ref="el => { sections[index] = el }"
          :data="item"
          :background-color="getSectionBackgroundColor(index)"
          :next-background-color="getSectionBackgroundColor(index + 1)"
          :transition-color="getSectionTransitionColor(index)"
      />
    </div>
    <transition name="read-more-transition">
      <ProjectReadMore v-if="readMoreData" :data="readMoreData"/>
    </transition>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PortfolioMention from "@/components/PortfolioMention";
import json from "@/assets/content/portfolio.json";
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
import ScrollDownButton from "@/components/ScrollDownButton";
import PortfolioFooter from "@/components/PortfolioFooter";
import ProjectReadMore from "@/components/ProjectReadMore";
import {useStore} from "vuex";
import {stringToSlug} from "@/assets/helpers/SlugUtility";
import IsFirstTimeEnter from "@/assets/helpers/FirstTimeEnter";

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

    const readMoreData = ref(null)

    if(IsFirstTimeEnter(route)) {
      window.scrollTo(0, 0);
    }

    const findAndSetReadMore = () => {
      if(route.params.project === "")
      {
        readMoreData.value = null
        return
      }

      for (let i = 0; i < json.length; i++) {
        if(stringToSlug(json[i].title) === route.params.project) {
          readMoreData.value = json[i]
          break;
        }
      }

      setTimeout(() => {
        window.scrollTo({
          top: document.getElementById(route.params.project).offsetTop,
          left: 0,
          behavior: 'smooth'
        })
      }, 0)
    }

    findAndSetReadMore()

    const getSectionBackgroundColor = (index) => {
      return index % 2 === 0 ? '#403d39' : '#252422'
    }

    const getSectionTransitionColor = (index) => {
      return index % 2 === 0 ? '#403d39' : '#252422'
    }

    onMounted(() => sections.value.splice(0, 0, footer.value))

    watch(() => route.params.project, (curr) => {
      findAndSetReadMore()
    })

    return {
      json,
      sections,
      getSectionBackgroundColor,
      getSectionTransitionColor,
      footer,
      readMoreData
    }
  }
}
</script>

<style lang="scss" scoped>
.read-more-transition-leave-active {
  transition: opacity 250ms;
  opacity: 0;
}

.home {
  scroll-behavior: smooth;
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }
}
</style>
