<template>
  <div class="project-container">
    <div class="block general" v-if="hasGeneral">
      <ul>
        <li v-for="(value, key) in details.general" :key="key">
          <font-awesome-icon :icon="generalData[key].icon"/>&nbsp;
          {{ value }}&nbsp;{{ generalData[key].suffix }}
        </li>
      </ul>
      <hr>
    </div>
    <div class="block team" v-if="hasTeam">
      <ul>
        <li v-for="(value, key) in details.team" :key="key">
          <font-awesome-icon :icon="teamData[key].icon"/>&nbsp;
          {{ value }}&nbsp;{{ teamData[key].suffix }}
        </li>
      </ul>
      <hr>
    </div>
    <div class="block tech" v-if="hasTech">
      <ul>
        <li v-for="(value, key) in details.technical" :key="key">
          <font-awesome-icon :icon="techData[key].icon"/>&nbsp;
          {{ value }}&nbsp;{{ techData[key].suffix }}
        </li>
      </ul>
      <hr>
    </div>
    <div class="block product" v-if="hasProduct">
      <ul>
        <li v-for="(value, key) in details.product" :key="key">
          <font-awesome-icon :icon="productData[key].icon"/>&nbsp;
          <a v-if="key === 'githubLink' || key === 'productPage'" :href="value" target="_blank">{{ value }}</a>
          <span v-else>{{ details[key] }}</span>
          &nbsp;{{ productData[key].suffix }}
        </li>
      </ul>
      <hr>
    </div>
  </div>
</template>


<script setup>
import {defineProps, computed} from 'vue';

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
};

const teamData = {
  teamSize: {icon: "people-group", suffix: "people"},
  projectType: {icon: "handshake", suffix: "project"},
  role: {icon: "masks-theater", suffix: ""},
};

const techData = {
  programmingLanguage: {icon: "square-binary", suffix: ""},
  graphicsBackend: {icon: "palette", suffix: "API"},
};

const productData = {
  githubLink: {icon: ['fab', 'github'], suffix: ""},
  productPage: {icon: ['fab', 'itch-io'], suffix: ""},
};

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

const hasGeneral = computed(() => !isEmpty(props.details.general));
const hasTech = computed(() => !isEmpty(props.details.technical));
const hasProduct = computed(() => !isEmpty(props.details.product));
const hasTeam = computed(() => !isEmpty(props.details.team));

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

    &.team {
      background: radial-gradient(circle at top left, rgb(66, 84, 57) 10%, rgb(35, 37, 34) 100%);

      hr {
        background-color: #cbfaa5;
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
