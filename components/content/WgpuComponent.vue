<template>
	<div class="wgpu-component">
		<iframe :src="path" width="100%" height="100%"></iframe>
	</div>
</template>

<script>
export default {
	name: "WGPUComponent",
	props: {
		path: {
			required: true,
			type: String
		}
	}
}
</script>

<style scoped lang="scss">
.wgpu-component {
	display: block;
	width: 100%;
	height: 750px;
	margin: 0 auto;

	border: 2px solid #eaeaea;

	iframe {
		border: none;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}
}

@media (max-width: 768px) {
	.wgpu-component {
		height: 75vh;
	}
}

</style>