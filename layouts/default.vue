<template>
	<div class="default-layout">
		<Navbar/>
		<NuxtPage class="content"/>
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

.content {
	min-height: 100%;
}
</style>