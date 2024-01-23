<template>
	<div class="cms-layout">
		<Navbar/>
		<div v-if="authenticated" class="nav-container">
			<CMSNavigation/>
			<NuxtPage class="content"/>
		</div>
	</div>
</template>

<script>
import Navbar from "~/components/Navbar";
import CMSNavigation from "~/components/CMSNavigation";
import {useMainStore} from '~/store/index'

export default {
	name: 'CmsLayout',
	components: {
		Navbar,
		CMSNavigation
	},
	setup() {
		const router = useRouter();
		const store = useMainStore();

		if(!store.isAuthenticated) {
			router.push('/login');
		}

		return {
			authenticated: store.isAuthenticated
		}
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
  