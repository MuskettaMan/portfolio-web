<template>
	<div class="youtube-component">
		<iframe
			width="560" height="315"
			:src="url"
			title="YouTube video player" frameborder="0"
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	</div>
</template>

<script>
export default {
	name: "YoutubeComponent",
	props: {
		url: {
			required: true,
			type: String
		}
	}
}
</script>

<style scoped lang="scss">
.youtube-component {
	width: 100%;

	iframe {
		object-fit: contain;
		display: block;
		width: 100%;
		height: auto;
		border-radius: 5px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
}

</style>
