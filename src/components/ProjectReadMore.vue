<template>
  <section class="project-read-more">
    <div class="wrapper">
      <div class="gallery">
        <div class="empty"></div>
        <div class="selected">
          <img :src="require(`@/assets/images/${selectedImage}`)" alt="">
        </div>
        <div class="previews-wrapper">
          <div class="fade fade-left"></div>
          <div class="previews">
            <img v-for="(image, index) in images" :key="index" :src="require(`@/assets/images/${image}`)" @click="() => onPreviewImageClick(image)" alt="" class="preview">
            <img v-for="(image, index) in images" :key="index" :src="require(`@/assets/images/${image}`)" @click="() => onPreviewImageClick(image)" alt="" class="preview">
          </div>
          <div class="fade fade-right"></div>
        </div>
      </div>
      <div class="details">
        <div class="text">
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias commodi dicta dolor doloremque expedita facere hic, ipsam laborum nemo nesciunt officiis qui quisquam, ratione repellat repudiandae saepe, voluptatum! Adipisci excepturi explicabo facilis harum obcaecati qui quidem, saepe vel. Amet deserunt earum eos et ipsum laboriosam obcaecati quia sequi unde?</p>
        </div>
        <div class="others">
          <ul>
            <li>
              <Tooltip message="Duration">
                <fa-icon icon="calendar"/>
                <p>3 Months</p>
              </Tooltip>
            </li>
            <li>
              <Tooltip message="End date">
                <fa-icon icon="timeline"/>
                <p class="date">2022/10/2</p>
              </Tooltip>
            </li>
            <li>
              <Tooltip message="Engine/Framework">
                <fa-icon icon="bolt"/>
                <p>Unity</p>
              </Tooltip>
            </li>
            <li>
              <Tooltip message="Language">
                <fa-icon icon="code"/>
                <p>C#</p>
              </Tooltip>
            </li>
            <li>
              <Tooltip message="Role">
                <fa-icon icon="user"/>
                <p>Project lead</p>
              </Tooltip>
            </li>
            <li>
              <Tooltip message="Repository URL">
                <fa-icon :icon="['fa-brands', 'github']"/>
                <p>Github</p>
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
export default {
  name: "ProjectReadMore",
  components: {Tooltip},
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const selectedImage = ref(props.images[0])

    const onPreviewImageClick = (image) =>
    {
      selectedImage.value = image;
    };

    return {
      selectedImage,
      onPreviewImageClick
    }
  }
}
</script>

<style lang="scss" scoped>
$modal-margin-ver: 5rem;
$modal-margin-hor: 15rem;

.project-read-more {
  position: fixed;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  top: 0;

  .wrapper {
    background-color: floralwhite;
    border-radius: 5px;
    filter: drop-shadow(4px 4px 8px rgba(black, 0.3));
    width: calc(100% - #{$modal-margin-hor} * 2);
    height: calc(100% - #{$modal-margin-ver} * 2);
    margin: $modal-margin-ver $modal-margin-hor;
    padding: 4rem;
    box-sizing: border-box;

    display: flex;
    align-items: stretch;
    gap: 4rem;

    .details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

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

        .previews {
          overflow-x: auto;
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding-bottom: 0.5rem;
          width: 100%;
          align-self: flex-end;

          .preview {
            width: 100px;
            height: 100px;
            filter: none;
            cursor: pointer;
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
</style>
