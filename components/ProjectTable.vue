<template>
  <div class="project-container">
    <div class="block general">
      <ul>
        <li v-for="(value, key) in generalData" :key="key">
          <font-awesome-icon :icon="value.icon"/>&nbsp;
          {{ details[key] }}&nbsp;{{ value.suffix }}
        </li>
      </ul>
      <hr>
    </div>
    <div class="block tech">
      <ul>
        <li v-for="(value, key) in techData" :key="key">
          <font-awesome-icon :icon="value.icon"/>&nbsp;
          {{ details[key] }}&nbsp;{{ value.suffix }}
        </li>
      </ul>
      <hr>
    </div>
    <div class="block product">
      <ul>
        <li v-for="(value, key) in productData" :key="key">
          <font-awesome-icon :icon="value.icon"/>&nbsp;
          <a v-if="key === 'githubLink' || key === 'productPage'" :href="value" target="_blank">{{ details[key] }}</a>
          <span v-else>{{ details[key] }}</span>
          &nbsp;{{ value.suffix }}
        </li>
      </ul>
      <hr>
    </div>
    <!--		<h2 class="project-title">{{ title }}</h2>
        <table class="project-table">
          <tbody>
          <tr v-for="(value, key) in details" :key="key" class="project-row">
            <td class="project-label">
              <span class="project-icon">
                <font-awesome-icon :icon="icons[key]"/>
              </span>
              <span class="project-label-text">{{ labels[key] }}</span>
            </td>
            <td class="project-value">
              <a v-if="key === 'githubLink' || key === 'productPage'" :href="value" target="_blank">{{ value }}</a>
              <span v-else>{{ value }}</span>
            </td>
          </tr>
          </tbody>
        </table>-->
  </div>
</template>


<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  details: {
    type: Object,
    required: true
  }
});

const generalData = {
  timeFrame: {icon: "clock", suffix: ""},
  schoolYear: {icon: "graduation-cap", suffix: ""},
  teamSize: {icon: "people-group", suffix: "people"},
  projectType: {icon: "handshake", suffix: "project"},
  role: {icon: "masks-theater", suffix: ""},
};

const techData = {
  programmingLanguage: {icon: "square-binary", suffix: ""},
  graphicsBackend: {icon: "palette", suffix: "API"},
};

const productData = {
  githubLink: {icon: "clock", suffix: ""},
  productPage: {icon: "rocket", suffix: ""},
};

</script>

<style scoped lang="scss">
.project-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  .block {
    max-width: 600px;
    background: #f5f1ef;
    border-radius: 8px;
    padding: 1rem 2rem;
    border: 1px solid #ccc;
    box-sizing: border-box;
    position: relative;

    .label {
      font-weight: bold;
    }

    ul {
      padding-left: 0rem;
      list-style-type: none;
    }

    li {
      color: white;
    }

    hr {
      position: absolute;
      bottom: 1rem;
      width: calc(100% - 6rem);
      border: none;
      height: 2px;
    }
    background: radial-gradient(circle at top left, rgba(64, 61, 57, 1) 10%, rgba(37, 36, 34, 1) 100%);
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);

    &.general {
      background: radial-gradient(circle at top left, rgb(82, 45, 60) 10%, rgba(37, 36, 34, 1) 100%);

      hr {
        background-color: rgb(245, 159, 189);
      }
    }

    &.tech {
      background: radial-gradient(circle at top left, rgb(63, 57, 84) 10%, rgba(37, 36, 34, 1) 100%);

      hr {
        background-color: #b9a5fa;
      }
    }

    &.product {
      background: radial-gradient(circle at top left, rgb(30, 49, 56) 10%, rgba(37, 36, 34, 1) 100%);

      hr {
        background-color: rgb(152, 220, 243);
      }
    }
  }
}


@media (max-width: 600px) {

  .project-container {
    gap: 1rem;

    .block {
      padding: 0.5rem 1rem;
      width: 100%;

      hr {
        bottom: 0.5rem;
      }
    }
  }
}
</style>
