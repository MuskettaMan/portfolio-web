<template>
	<div class="default-layout">
		<Navbar/>
		<NuxtPage/>
		<Footer/>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.default-layout {
	display: flex;
	flex-direction: column;
	height: 100%;

	.footer {
		margin-top: auto;
	}
}

</style>