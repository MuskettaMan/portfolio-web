<template>
  <header class="page-header" :class="{ 'entry-animation': useEntryAnimation }">
    <p>Hi, my name is</p>
    <h1>Ferri de Lange</h1>
    <p>I like coding snazzy games</p>
  </header>
</template>

<script>
import {computed} from "vue";
import {useRoute} from "vue-router";

export default {
  name: "PageHeader",
  setup() {
    const route = useRoute();

    const useEntryAnimation = computed(() => {
      let hasHash = route.hash === "";
      return hasHash && (document.cookie === 'visited=false' || document.cookie === '');
    })

    return {
      useEntryAnimation
    }
  }
}
</script>

<style scoped lang="scss">
.page-header {
  margin: 0 12rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 70vh;
  justify-content: center;

  &.entry-animation {
    height: 100vh;
    animation-name: enter;
    animation-duration: 1s;
    animation-delay: 1.75s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  p {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 4.5rem;
  }
}

@media only screen and (max-width: 600px) {
  .page-header {
    margin: 0 2rem;

    p {
      font-size: 1.2rem;
    }

    h1 {
      font-size: 3.0rem;
    }
  }
}

@keyframes enter {
  from { height: 100vh; }
  to { height: 75vh; }
}
</style>
