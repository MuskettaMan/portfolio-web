<template>
  <div class="link-header">
    <slot/>
    <fa-icon icon="link"/>
  </div>
</template>

<script>
export default {
  name: "LinkHeader"
}
</script>

<style lang="scss" scoped>
  .link-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: fit-content;
    cursor: pointer;

    &:hover svg {
      opacity: 1;
      transition-property: opacity;
      transition: 250ms;
    }

    svg {
      color: $floral-white;

      opacity: 0;
      transition-property: opacity;
      transition: 250ms;
      transform: scale(1.5);
    }
  }
</style>
