<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
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
}
</style>
