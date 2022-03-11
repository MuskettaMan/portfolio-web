<template>
  <section @click.self="clickedOutsideOfModal" class="project-read-more">
    <div class="wrapper">
      <div class="close-button">
        <button @click="clickedCloseButton"><fa-icon icon="xmark"/></button>
      </div>
      <div class="gallery">
        <div class="empty"></div>
        <div class="selected">
          <img :src="require(`@/assets/images/${selectedImage}`)" alt="">
        </div>
        <div class="previews-wrapper">
          <div class="fade fade-left"></div>
          <div class="previews">
            <div class="preview" v-for="(image, index) in data.images" :key="index" :class="{'selected-preview': selectedImage === image}">
              <img :src="require(`@/assets/images/${image}`)" @click="() => onPreviewImageClick(image)" alt="">
              <div class="underline"></div>
            </div>
          </div>
          <div class="fade fade-right"></div>
        </div>
      </div>
      <div class="details">
        <div class="text">
          <h2>{{ data.title }}</h2>
          <p>{{ data.intro }}</p>
          <br/>
          <span v-for="(description, index) in data.description" :key="index">
            <p>{{ description }}</p>
            <br v-if="index !== data.description.length - 1">
          </span>
        </div>
        <div class="others">
          <ul>
            <li v-if="data.startDate">
              <Tooltip message="Start date">
                <fa-icon icon="calendar"/>
                <p class="date">{{ data.startDate }}</p>
              </Tooltip>
            </li>
            <li v-if="data.duration">
              <Tooltip message="Duration">
                <fa-icon icon="timeline"/>
                <p>{{ data.duration }}</p>
              </Tooltip>
            </li>
            <li v-if="data.engine">
              <Tooltip message="Engine/Framework">
                <fa-icon icon="bolt"/>
                <p>{{ data.engine }}</p>
              </Tooltip>
            </li>
            <li v-if="data.language">
              <Tooltip message="Language">
                <fa-icon icon="code"/>
                <p>{{ data.language }}</p>
              </Tooltip>
            </li>
            <li v-if="data.role">
              <Tooltip message="Role">
                <fa-icon icon="user"/>
                <p>{{ data.role }}</p>
              </Tooltip>
            </li>
            <li v-if="data.repositoryUrl">
              <Tooltip message="Repository URL">
                <fa-icon :icon="['fa-brands', 'github']"/>
                <p><a :href="data.repositoryUrl" target="_blank">{{ data.repositoryUrl }}</a></p>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tooltip from "@/components/Tooltip";
import {ref} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
export default {
  name: "ProjectReadMore",
  components: {Tooltip},
  props: {
    data: {
      type: Object,
      required: true,
      default: null
    }
  },
  setup(props) {
    if(props.data === null)
      return {}

    const selectedImage = ref(props.data.images[0])
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const onPreviewImageClick = (image) =>
    {
      selectedImage.value = image;
    };

    const clickedOutsideOfModal = () => {
      router.push({ name: 'home', params: { project: '' }})
    }
    const clickedCloseButton = () => {
      router.push({ name: 'home', params: { project: '' }})
    }

    return {
      selectedImage,
      onPreviewImageClick,
      clickedOutsideOfModal,
      clickedCloseButton
    }
  }
}
</script>

<style lang="scss" scoped>
$modal-margin-ver: 5rem;
$modal-margin-hor: 15rem;

@keyframes modal-enter {
  0% {
    top: 200%;
  }
  100% {
    top: 50%;
  }
}

.project-read-more {
  position: fixed;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  top: 0;

  .wrapper {
    position: absolute;
    background-color: $floral-white;
    border-radius: 5px;
    filter: drop-shadow(4px 4px 8px rgba(black, 0.3));
    width: calc(100% - 15rem * 2);
    height: calc(100% - 5rem * 2);
    transform: translate(-50%, -50%);
    left: 50%;
    top: 200%;
    padding: 4rem;
    box-sizing: border-box;

    animation-name: modal-enter;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    display: flex;
    align-items: stretch;
    gap: 4rem;

    .close-button {
      position: absolute;
      right: 0.75rem;
      top: 0.75rem;

      width: 2rem;
      height: 2rem;

      button {
        margin: 0;
        border: 0;

        width: 100%;
        height: 100%;

        background: rgba($eerie-black, 0.1) none;
        border-radius: 50vh;
        padding: 0.25rem;
        cursor: pointer;

        transition-property: background-color;
        transition: 250ms;

        &:hover {
          background: rgba($eerie-black, 0.2) none;
          transition-property: background-color;
          transition: 250ms;
        }

        &:active {
          background: rgba($eerie-black, 0.3) none;
          transition-property: background-color;
          transition: 250ms;
        }

        svg {
          fill: $eerie-black;
          opacity: 0.75;
          width: 100%;
          height: 100%;
        }
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .text {
        h2 {
          margin-bottom: 1rem;
        }
      }

      .others {
        ul {
          list-style-type: none;
          margin: 0;
          padding-left: 0;

          li {
            height: 1.8rem;
            display: flex;
            align-items: center;
            svg {
              width: 20px;
            }

            p {
              width: fit-content;
              display: inline;
              margin-left: 0.5rem;
            }

            .date {
              background-color: rgba(0, 0, 0, 0.1);
              border-radius: 5px;
              padding: 3px;
            }
          }
        }
      }
    }

    .gallery {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-width: 30vw;
      gap: 2rem;

      .selected {
        width: 100%;
        height: 50vh;
        position: relative;
        img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .previews-wrapper {
        position: relative;
        width: 100%;
        align-self: flex-end;

        .previews {
          overflow-x: auto;
          display: flex;
          gap: 1rem;
          padding-bottom: 0.7rem;
          justify-content: safe center;
          .selected-preview {
            .underline {
              background-color: $eerie-black;
              height: 5px;
              border-radius: 50vh;
              margin-top: 2.5px;
              opacity: 80%;
            }
          }

          .preview {
            flex-shrink: 0;
            width: 133px;
            height: 100px;
            filter: none;
            cursor: pointer;

            transition-property: filter;
            transition: 250ms;
            position: relative;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;

              animation-play-state: paused;
            }

            &:hover {
              filter: brightness(0.9);
              transition-property: filter;
              transition: 250ms;
            }

            &:active {
              filter: brightness(0.8);
              transition-property: filter;
              transition: 250ms;
            }
          }

          .preview:last-child {
            margin-right: 1rem;
          }
          .preview:first-child {
            margin-left: 1rem;
          }
        }

        .fade {
          position: absolute;
          background-color: red;
          height: 100%;
          width: 0.5rem;
        }
        .fade-left {
          left: 0;
          background: linear-gradient(90deg, rgba($floral-white ,1) 0%, rgba($floral-white ,0) 100%);
        }
        .fade-right {
          right: 0;
          top: 0;
          background: linear-gradient(270deg, rgba($floral-white ,1) 0%, rgba($floral-white ,0) 100%);
         }
      }

      img {

        display: block;
        border-radius: 5px;
        filter: drop-shadow(4px 4px 8px rgba(black, 0.3));
        opacity: 0.95;
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  $modal-margin-ver: 5rem;
  $modal-margin-hor: 5rem;

  .project-read-more {

    .wrapper {
      width: calc(100% - 1rem * 2);
      height: calc(100% - 2rem * 2);
      flex-direction: column;
      overflow-y: auto;
      padding: 3rem 2rem 2rem;
      gap: 2rem;

      .close-button {
        position: absolute;
      }

      .details {
        gap: 1rem;
      }

      .gallery {
        gap: 1rem;
        .selected {
          height: 30vh;
          img {
            object-position: top;
          }
        }
        .previews-wrapper {
          .previews {
            padding-bottom: 1rem;
          }
        }
      }
    }
  }
}
</style>
