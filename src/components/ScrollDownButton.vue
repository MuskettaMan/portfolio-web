<template>
  <div class="scroll-button" :class="{ 'reached-bottom': reachedBottom, effect: effect}">
    <button @click="nextSectionButtonClicked">
      <fa-icon icon="circle-arrow-down"></fa-icon>
    </button>
  </div>
</template>

<script>
import {computed, onMounted, onUnmounted, ref} from "vue";
import IsFirstTimeEnter from "@/assets/helpers/FirstTimeEnter";
import {useRoute} from "vue-router";

export default {
  name: "ScrollDownButton",
  props: {
    targets: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const reachedBottom = ref(false)
    const route = useRoute();
    const effect = computed(() => IsFirstTimeEnter(route))
    const queryScrollButtonEnabled = () => {
      const lastElement = props.targets[props.targets.length - 1].$el;
      const bottomScroll = window.scrollY + window.innerHeight - lastElement.offsetHeight + 50

      reachedBottom.value = bottomScroll > lastElement.offsetTop;
    }

    const nextSectionButtonClicked = () => {
      let targetIndex = 0;
      if(!reachedBottom.value) {
        for (let i = 0; i < props.targets.length; i++) {
          if(props.targets[i].$el.offsetTop > window.scrollY) {
            targetIndex = i;
            break;
          }
        }
      }

      window.scrollTo({
        top: props.targets[targetIndex].$el.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }

    onMounted(() => {
      window.addEventListener('scroll', queryScrollButtonEnabled)
      queryScrollButtonEnabled();
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', queryScrollButtonEnabled)
    })

    return {
      nextSectionButtonClicked,
      reachedBottom,
      effect
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-button {
  z-index: 1;
  position: fixed;
  width: 3rem;
  height: 3rem;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: floralwhite;
  mix-blend-mode: difference;

  &.effect {
    opacity: 0;
    animation-name: enter;
    animation-duration: 1s;
    animation-delay: 1.75s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  &.reached-bottom button svg {
    transition: transform 250ms;
    transform: rotate(180deg);
  }

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

  &:hover.reached-bottom button {
    bottom: 0.5rem;
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
      color: floralwhite;
      transform: rotate(0);
      transition: transform 250ms;
    }
  }
}

@media only screen and (max-width: 600px) {
  .scroll-button {
    button {
      opacity: 90%;
    }
  }
}

@keyframes enter {
  from { opacity: 0; }
  to { opacity: 100%; }
}
</style>
