<template>
  <div class="home">
    <div class="wrapper">
      <PageHeader/>
      <PortfolioMention
          v-for="(item, index) in json"
          :key="index"
          :title="item.title"
          :description="item.description"
          :image-url="require(`@/assets/images/${item.imageUrl}`)"
          :color="item.color"
          :background-color="index - 1 >= 0 ? json[index - 1].color : '#fffcf2'"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PortfolioMention from "@/components/PortfolioMention";
import json from "@/assets/content/portfolio.json";
import {useRoute} from "vue-router";

export default {
  name: 'HomeView',
  components: {
    PageHeader,
    PortfolioMention
  },
  setup() {
    const route = useRoute();
    let hasHash = route.hash === "";

    if(hasHash && (document.cookie === 'visited=false' || document.cookie === '')) {
      window.scrollTo(0, 0);
      setTimeout(() => document.cookie = "visited=true", 1)
    }


    return {
      json
    }
  }
}
</script>

<style lang="scss" scoped>

.home {
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }
}

</style>
