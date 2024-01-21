<template>
    <div class="cms-layout">
        <Navbar />
        <div class="nav-container">
            <CMSNavigation />
            <router-view  />
        </div>
    </div>
</template>
  
<script>
import Navbar from "@/components/Navbar";
import CMSNavigation from "@/components/CMSNavigation";

export default {
    name: 'CmsLayout',
    components: {
        Navbar,
        CMSNavigation
    },
};
</script>
  
<style scoped>
.cms-layout {
}
.nav-container {
    display: flex;    
}
</style>
  