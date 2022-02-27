<template>
  <section :id="stringToSlug(title)" :style="style" class="portfolio-mention">
    <ShapeDivider :type="getRandomDivider()" :color="backgroundColor"/>
    <div class="content-wrapper">
      <div class="content">
        <div class="text-wrapper">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <p class="read-more">Read more &#129042;</p>
        </div>
        <div class="image-wrapper">
          <img :src="imageUrl" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { stringToSlug } from "@/assets/helpers/SlugUtility";
import ShapeDivider from "@/components/ShapeDivider";
import {dividers} from "@/components/ShapeDivider";

export default {
  name: "PortfolioMention",
  components: {ShapeDivider},
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const style = computed(() => {
      return `
        --color: ${props.color};
        --background-color: ${props.backgroundColor};
      `
    })

    const getRandomDivider = () => {
      return dividers[Math.floor(Math.random() * dividers.length)];
    }

    return {
      style,
      stringToSlug,
      getRandomDivider
    }
  }
}
</script>

<style scoped lang="scss">
.portfolio-mention {
  position: relative;
  background-color: var(--color);
  display: flex;
  padding: 10rem 10rem 0;

  .content-wrapper {
    min-height: 75vh;
    display: flex;
    align-items: center;

    .content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2rem;

      .text-wrapper {
        max-width: 50%;

        h2 {
          margin-bottom: 3rem;
        }

        p {
          line-height: 1.5rem;
        }

        p, h2 {
          color: white;
        }

        .read-more {
          margin-top: .5rem;

          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }

      .image-wrapper {
        img {
          object-fit: contain;
          height: 100%;
          border-radius: 5px;
          opacity: .95;
          filter: drop-shadow(4px 4px 8px rgba(black, 0.3));
        }
      }
    }
  }
}

@media only screen and (max-width: 1000px) {
  .portfolio-mention {
    padding: 8rem 2rem 0;

    .content-wrapper {
      .content {
        height: auto;
        justify-content: center;
        margin-bottom: 2rem;

        .text-wrapper {
          max-width: 100%;

          h2 {
            margin-bottom: 1rem;
          }
        }

        .image-wrapper {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
