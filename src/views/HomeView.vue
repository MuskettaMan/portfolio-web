<template>
  <div class="home">
    <div class="wrapper">
      <PageHeader/>
      <div class="scroll-button" :class="{ disabled: !scrollButtonEnabled }">
        <button @click="nextSectionButtonClicked">
          <fa-icon icon="circle-arrow-down"></fa-icon>
        </button>
      </div>
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
import {onMounted, onUnmounted, ref} from "vue";

export default {
  name: 'HomeView',
  components: {
    PageHeader,
    PortfolioMention
  },
  setup() {
    const sections = ref([])
    const route = useRoute();
    const scrollButtonEnabled = ref(true)
    const queryScrollButtonEnabled = () => {
      if(sections.value.length === 0)
        return false;

      const lastElement = sections.value[sections.value.length - 1].$el;
      const bottomHeight =  lastElement.offsetTop - 100;

      scrollButtonEnabled.value = window.scrollY < bottomHeight;
    }

    let hasHash = route.hash === "";
    if(hasHash && (document.cookie === 'visited=false' || document.cookie === '')) {
      window.scrollTo(0, 0);
      setTimeout(() => document.cookie = "visited=true", 1)
    }

    const getSectionBackgroundColor = (index) => {
      return index % 2 === 0 ? '#403d39' : '#252422'
    }

    const getSectionTransitionColor = (index) => {
      if(index == 0)
        return '#fffcf2ff'

      return index % 2 === 1 ? '#403d39' : '#252422'
    }

    const nextSectionButtonClicked = () => {
      let targetIndex = sections.value.length;
      for (let i = 0; i < sections.value.length; i++) {
        if(sections.value[i].$el.offsetTop > window.scrollY) {
          targetIndex = i;
          break;
        }
      }

      window.scrollTo({
        top: sections.value[targetIndex].$el.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }

    onMounted(() => {
      window.addEventListener('scroll', queryScrollButtonEnabled)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', queryScrollButtonEnabled)
    })

    return {
      json,
      sections,
      getSectionBackgroundColor,
      getSectionTransitionColor,
      nextSectionButtonClicked,
      scrollButtonEnabled,
      queryScrollButtonEnabled
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

    .scroll-button {
      z-index: 1;
      position: fixed;
      width: 3rem;
      height: 3rem;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);

      &:not(.disabled) {
        button {
          transition: all 250ms;
          transition-property: opacity, bottom;
        }

        &:hover button {
          opacity: 95%;
          bottom: -0.5rem;
          transition: all 150ms;
          transition-property: opacity, bottom;
          cursor: pointer;
        }
      }

      button {
        display: block;
        position: absolute;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        left: 50%;
        transform: translateX(-50%);
        width: 3rem;
        height: 3rem;
        opacity: 60%;
        bottom: 0;

        svg {
          width: 100%;
          height: 100%;
          color: white;
        }
      }

      &.disabled {
        button {
          bottom: 0;
          opacity: 10%;
          transition: all 150ms;
          transition-property: opacity, bottom;
        }
        &:hover button {
          bottom: 0;
          transition: all 150ms;
          transition-property: opacity, bottom;
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .home {
    .wrapper {
      .scroll-button {
        button {
          opacity: 90%;
        }
      }
    }
  }
}
</style>
