<template>
  <div class="wrapper">
    <PageHeader/>
    <PortfolioMention color="#053c5e" background-color="#fffcf2" title="Object pooling" description="This package is an implementation of the Object Pool design pattern made for Unity. It contains the traditional implementation of the design pattern, but also a more specialized implementation dealing with how GameObjects are instantiated, maintained and destroyed." />
    <PortfolioMention color="#1d3958" background-color="#053c5e" title="Object pooling" description="This package is an implementation of the Object Pool design pattern made for Unity. It contains the traditional implementation of the design pattern, but also a more specialized implementation dealing with how GameObjects are instantiated, maintained and destroyed." />
    <PortfolioMention color="#353652" background-color="#1d3958" title="Object pooling" description="This package is an implementation of the Object Pool design pattern made for Unity. It contains the traditional implementation of the design pattern, but also a more specialized implementation dealing with how GameObjects are instantiated, maintained and destroyed." />
    <PortfolioMention color="#4c334d" background-color="#353652" title="Object pooling" description="This package is an implementation of the Object Pool design pattern made for Unity. It contains the traditional implementation of the design pattern, but also a more specialized implementation dealing with how GameObjects are instantiated, maintained and destroyed." />
    <PortfolioMention color="#643047" background-color="#4c334d" title="Object pooling" description="This package is an implementation of the Object Pool design pattern made for Unity. It contains the traditional implementation of the design pattern, but also a more specialized implementation dealing with how GameObjects are instantiated, maintained and destroyed." />
    <PortfolioMention color="#7c2e41" background-color="#643047" title="Object pooling" description="This package is an implementation of the Object Pool design pattern made for Unity. It contains the traditional implementation of the design pattern, but also a more specialized implementation dealing with how GameObjects are instantiated, maintained and destroyed." />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PortfolioMention from '@/components/PortfolioMention.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PortfolioMention
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
