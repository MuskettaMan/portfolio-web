<template>
  <span class="tag">
    <p :style="style">{{ message }}</p>
  </span>
</template>

<script>
import {computed} from "vue";

export default {
  name: "ProjectTag",
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const map = {
      "COMPANY": "#339989",
      "PERSONAL": "#d77a61"
    }

    const style = computed(() => `--tag-color: ${map[props.message]}`)

    return {
      style
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: white;
  background-color: var(--tag-color);
  width: fit-content;
  border-radius: 8px;
  padding: 3px 8px 1px 7px;
  font-weight: 600;
  opacity: .95;
}

@media only screen and (max-width: 600px) {
  p {
    border-radius: 6px;
    padding: 1px 7px 2px 6px;
  }
}
</style>
