<template>
  <span class="tag">
    <p :style="style">{{ message }}</p>
  </span>
</template>

<script>
import {computed} from "vue";

export default {
	name: "ProjectTag",
	props: {
		message: {
			type: String,
			required: true
		}
	},
	setup(props) {
		const map = {
			"OPENGL": "#5a8aa7",
			"VULKAN": "#ac162c",
			"PASSION": "#d94873",
			"SCHOOL": "#ee7623",
			"TEAM": "#8e6fde",
			"SOLO": "#35b45d",
		}

		const style = computed(() => `--tag-color: ${map[props.message] ?? "#a861d7"}`)

		return {
			style
		}
	}
}
</script>

<style lang="scss" scoped>
p {
	display: inline-block;
	color: white;
	background-color: var(--tag-color);
	width: fit-content;
	white-space: break-spaces;
	border-radius: 8px;
	padding: 0 6px;
	font-weight: 600;
	font-size: 1rem;
	opacity: .95;
	line-height: 1.6rem;
	margin: 0;

	position: relative;

	box-shadow: var(--tag-color) 0 0 1px 0;
}

@media only screen and (max-width: 600px) {
	p {
		border-radius: 6px;
		padding: 0 6px;
		font-size: 0.8rem;
	}
}
</style>
