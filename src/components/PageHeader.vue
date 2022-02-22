<template>
  <header class="page-header">
    <p>Hi, my name is</p>
    <h1>Ferri de Lange</h1>
    <p>My passion lies in game development</p>
  </header>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>

<style scoped lang="scss">
.page-header {
  padding: 12rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
