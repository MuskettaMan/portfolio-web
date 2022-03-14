<template>
  <section :id="stringToSlug(data.title)" :style="style" :class="{'read-more-active': modalActive}" class="portfolio-mention">
    <div class="content-wrapper">
      <div class="content">
        <div class="text-wrapper">
          <div class="header">
            <project-tag v-for="(tag, index) in data.tags" :key="index" :message="tag"/>
            <a :href="'#' + stringToSlug(data.title)" style="text-decoration: none" @click="() => onClickTitle(stringToSlug(data.title))"><LinkHeader><h2>{{ data.title }}</h2></LinkHeader></a>
          </div>
          <p>{{ data.intro }}</p>
        </div>
        <div class="image-wrapper">
          <img :src="require(`@/assets/images/${getImage()}`)" alt="">
        </div>
        <button @click="onReadMoreClicked" class="read-more"><span class="effect">Read more</span></button>
      </div>
    </div>
    <ShapeDivider :type="divider" :color="transitionColor" :background-color="nextBackgroundColor"/>
  </section>
</template>

<script>
import {computed, ref} from "vue";
import { stringToSlug } from "@/assets/helpers/SlugUtility";
import ShapeDivider from "@/components/ShapeDivider";
import {dividers} from "@/components/ShapeDivider";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import ProjectTag from "@/components/ProjectTag";
import LinkHeader from "@/components/LinkHeader";

export default {
  name: "PortfolioMention",
  components: {LinkHeader, ProjectTag, ShapeDivider},
  props: {
    data: {
      type: Object,
      required: true
    },
    backgroundColor: {
      type: String,
      required: true
    },
    nextBackgroundColor: {
      type: String,
      required: true
    },
    transitionColor: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    const router = useRouter()
    const route = useRoute()
    const style = computed(() => {
      return `
        --background-color: ${props.backgroundColor};
      `
    })

    const modalActive = computed( () => route.params.project !== "")

    const getRandomDivider = () => {
      return dividers[Math.floor(Math.random() * dividers.length)];
    }

    const divider = ref(getRandomDivider())

    const onReadMoreClicked = () => {
      router.push({name: 'home', params: { project: stringToSlug(props.data.title) }})
    }

    const getImage = () => {
      if(props.data.images === undefined || props.data.images === null || props.data.images.length === 0)
        return 'image-not-found.jpg'

      return props.data.images[0]
    }

    const onClickTitle = (text) => {
      navigator.clipboard.writeText('https://ferri.dev/#' + text)
    }

    return {
      style,
      stringToSlug,
      divider,
      onReadMoreClicked,
      modalActive,
      getImage,
      onClickTitle
    }
  }
}
</script>

<style scoped lang="scss">
.portfolio-mention {
  position: relative;
  background-color: var(--background-color);
  display: flex;
  padding: 2rem 10rem 8rem;

  &.read-more-active {
    padding-right: calc(10rem + 17px);
  }

  .content-wrapper {
    min-height: 75vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    .content {
      display: grid;
      grid-template-rows: auto auto auto;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      width: 100%;

      .read-more {
        display: block;
        margin-top: 2rem;
        border: none;
        background: none;
        padding: 0;
        width: fit-content;

        .effect {
          will-change: transform;
          transition: transform 450ms;

          display: block;
          background-color: #eb5e28;
          border-radius: 5px;
          color: white;
          padding: 1rem 2rem;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 1rem;
          filter: drop-shadow(4px 4px 8px rgba(black, 0.2));
        }
        &:hover .effect {
          cursor: pointer;
          transition: transform 150ms;
          transform: translateY(-10px);
        }
      }

      .text-wrapper {
        height: fit-content;

        .header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          .link-header {
            margin-bottom: 3rem;
          }

        }

        p {
          line-height: 1.5rem;
        }

        p, h2 {
          color: white;
        }

      }

      .image-wrapper {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 4;
        img {
          width: 35vw;
          object-fit: contain;
          display: block;
          float: right;
          height: 100%;
          border-radius: 5px;
          opacity: .95;
          filter: drop-shadow(4px 4px 8px rgba(black, 0.3));
        }
      }
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-mention .content-wrapper .content .text-wrapper .read-more .effect {
    transition: none;
  }
}

@media only screen and (max-width: 1410px) {
  .portfolio-mention {
    padding: 2rem 4rem 8rem;
  }
}

@media only screen and (max-width: 1000px) {
  .portfolio-mention {
    padding: 1rem 2rem 7rem;


    &.read-more-active {
      padding-right: 2rem;
    }

    .content-wrapper {
      .content {
        margin-bottom: 2rem;
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr;

        .text-wrapper {
          max-width: 100%;

          .header {
            h2 {
              margin-bottom: 1rem;
            }
          }

        }

        .read-more {
          margin: 1rem auto 0;
        }

        .image-wrapper {
          grid-column-start: auto;
          grid-column-end: auto;
          grid-row-start: auto;
          grid-row-end: auto;
          img {
            float: none;
            width: 60vw;
            margin: 0 auto;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .portfolio-mention {
    .content-wrapper {
      .content {
        .image-wrapper {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
