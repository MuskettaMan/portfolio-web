<template>
	<div class="youtube-component">
		<!--		<iframe-->
		<!--			width="560" height="315"-->
		<!--			:src="url"-->
		<!--			title="YouTube video player" frameborder="0"-->
		<!--			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"-->
		<!--			referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>-->
		<lite-youtube :videoid="videoid" :playlabel="'Play'" :title="title"/>
	</div>
</template>

<script>
export default {
	name: "YoutubeComponent",
	props: {
		videoid: {
			required: true,
			type: String
		},
		title: {
			required: false,
			type: String,
			default: ""
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
		width: 80%;
		height: 50vh;
		border-radius: 5px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
}

</style>
