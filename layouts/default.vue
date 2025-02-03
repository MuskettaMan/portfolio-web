<template>
	<div class="default-layout">
		<Navbar/>
		<NuxtPage class="page"/>
		<Footer/>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.default-layout {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	min-height: 100vh;
	height: inherit;

	.nav-wrapper {
		flex-grow: 0;
	}

	.page {
		flex-grow: 10;
	}

	.footer {
		flex-grow: 0;
	}
}

</style>