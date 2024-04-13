<template>
	<div class="cms-layout">
		<div class="nav-container">
			<CMSNavigation/>
			<NuxtPage class="content"/>
		</div>
	</div>
</template>

<script>
import CMSNavigation from "~/components/CMSNavigation";


export default {
	name: 'CmsLayout',
	components: {
		CMSNavigation
	},
	setup() {
		definePageMeta({
			middleware: ['auth'],
		})
		return {}
	}
};
</script>

<style scoped>
.cms-layout {
}

.nav-container {
	display: flex;

}

body {
	margin: 0;
}

.cms-nav-wrapper {
	flex-shrink: 0;
	flex-grow: 0;
}

</style>
  