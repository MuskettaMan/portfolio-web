<template>
  <div class="tooltip">
    <slot/>
    <span class="message">
      {{ message }}
    </span>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tooltip",
  props: {
    message: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: inline-block;

  &:hover .message {
    transition-property: visibility;
    visibility: visible;
    transition: visibility 0s linear, opacity 100ms;
    transform:translateX(calc(-100% - 1rem)) translateY(calc(-50% + 10px));
    opacity: 0.95;
  }

  .message {
    transform-origin: right;
    transition-property: visibility;
    visibility: hidden;
    transition: visibility 0s linear, opacity 100ms;
    transform: translateX(calc(-100% - 1rem)) translateY(calc(-50% + 10px));
    opacity: 0;

    width: fit-content;
    background-color: $eerie-black;
    color: $floral-white;
    text-align: center;
    padding: 5px 15px;
    left: 0;
    top: 0;
    border-radius: 5px;
    position: absolute;
    z-index: 4;
  }
}
</style>
