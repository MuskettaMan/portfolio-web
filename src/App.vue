<template>
  <router-view/>
</template>

<script>
import {useStore} from "vuex";
import {watch} from "vue";
import {useRoute} from "vue-router";
import IsFirstTimeEnter from "@/assets/helpers/FirstTimeEnter";

export default {
  name: 'App',
  setup() {
    setTimeout(() => document.cookie = "visited=true; SameSite=None; Secure", 1)
    const store = useStore();
    const route = useRoute();
    watch(() => route.params.project, (curr) => {
      document.documentElement.style.overflow = curr !== "" ? 'hidden' : 'auto'
    })

    if(IsFirstTimeEnter(route)) {
      document.documentElement.style.overflow ='hidden'
      setTimeout(() => {
        document.documentElement.style.overflow ='auto'
      }, 2750)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');

body, p, h1, h2, h3 {
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
h3 {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 2.2rem;
  opacity: 0.9;
}

a {
  color: $flame;
}

a:visited {
  color: #9f380f;
}

button {
  font-family: 'Monsterrat', Helvetica, Arial, sans-serif;
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
  color: $eerie-black;
}
</style>
