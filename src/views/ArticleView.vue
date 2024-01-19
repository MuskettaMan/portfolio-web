<template>
    <div class="article">
        <div class="wrapper">
            <Navbar></Navbar>
        </div>
    </div>
</template>
  
<script>
import Navbar from "@/components/Navbar";

export default {
    name: 'ArticleView',
    title: "Ferri's Portfolio",
    components: {
        Navbar
    },
    setup() {

        return {
        }
    }
}
</script>
  
<style lang="scss" scoped>
.read-more-transition-leave-active {
    transition: opacity 250ms;
    opacity: 0;
}

.article {
    scroll-behavior: smooth;

    .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
    }
}
</style>
  