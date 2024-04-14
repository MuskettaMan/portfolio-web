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
			"COMPANY": "#339989",
			"GRAPHICS": "#c55348",
			"C++": "#b061d7",
			"CUSTOM-ENGINE": "#d7618e",
			"OPENGL": "#83ad4e",
			"CUDA": "#4aa44c",
			"PERSONAL": "#4a5eb2",
			"SCHOOL": "#bb7333",
			"UNITY": "#9d9d9d",
			"C#": "#8d43cc",
			"ALGORITHMS": "#a1a44a",
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
	transition: padding 0.2s ease-in-out;
	display: inline-block;
	color: white;
	background-color: var(--tag-color);
	width: fit-content;
	white-space: break-spaces;
	border-radius: 8px;
	padding: 0 6px;
	font-weight: 600;
	opacity: .95;

	position: relative;

	box-shadow: var(--tag-color) 0 0 2px 0;

	&:hover {
		padding: 0 12px;
	}

	&::after {
		content: "";
		position: absolute;
		bottom: 2px;
		right: 7px;
		width: calc(100% - 15px);
		height: 2px;
		filter: brightness(0.8);
		background-color: var(--tag-color);
	}
}

@media only screen and (max-width: 600px) {
	p {
		border-radius: 6px;
		padding: 0 6px;
	}
}
</style>
