<template>
  <section :id="stringToSlug(title)" :style="style" class="portfolio-mention">
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
    <div class="custom-shape-divider-top-1645555047">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
      </svg>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { stringToSlug } from "@/assets/helpers/SlugUtility";

export default {
  name: "PortfolioMention",
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

    return {
      style,
      stringToSlug
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



  .custom-shape-divider-top-1645555047 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1645555047 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 92px;
  }

  .custom-shape-divider-top-1645555047 .shape-fill {
    fill: var(--background-color);
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

    .custom-shape-divider-top-1645555047 svg {
      width: calc(175% + 1.3px);
      transform: translateX(-10%);
    }
  }
}
</style>
