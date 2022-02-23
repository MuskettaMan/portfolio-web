<template>
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
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PortfolioMention from '@/components/PortfolioMention.vue'
import json from '@/assets/content/portfolio.json'

export default {
  name: 'App',
  components: {
    PageHeader,
    PortfolioMention
  },
  setup() {

    return {
      json
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');

body, p, h1, h2 {
  margin: 0;
  padding: 0;
}

p {
  font-size: 1.1rem;
  color: $black-olive;
  opacity: 0.9;
}

h1 {
  font-family: 'Monsterrat', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 3.5rem;
  opacity: 0.9;
}

h2 {
  font-family: 'Monsterrat', Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 3rem;
  opacity: 0.9;
}

@media only screen and (max-width: 600px) {
  p {
    font-size: .9rem;
  }

  h1 {
    font-size: 2.45rem;
  }

  h2 {
    font-size: 2.25rem;
  }
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $floral-white;
  height: 100vh;
  position: absolute;
  color: $eerie-black;

  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
  }
}
</style>
