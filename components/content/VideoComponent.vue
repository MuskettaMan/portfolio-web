<template>
	<video class="video-component" :src="src" controls>

	</video>
</template>

<script>
export default {
	name: "VideoComponent",
	props: {
		src: {
			required: true,
			type: String
		}
	}
}
</script>

<style scoped lang="scss">
video {
	width: 80%;
	height: auto;
	display: block;
}

</style>
