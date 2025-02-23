<template>
	<nuxt-link class="cta-button" v-if="isNuxtLink" :to="link">{{ text }}
		<font-awesome-icon icon="angle-right"/>
	</nuxt-link>
	<a class="cta-button" v-else :href="link">{{ text }}
		<font-awesome-icon icon="angle-right"/>
	</a>
</template>

<script>
import {computed} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
	name: "CTA Button",
	components: {FontAwesomeIcon},
	props: {
		text: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		},
		isNuxtLink: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	setup(props) {
		return {}
	}
}
</script>

<style scoped lang="scss">
@use "sass:color";

.cta-button {
	display: inline-block;
	padding: .75rem 1.25rem;
	width: fit-content;
	border-radius: 0.5rem;
	color: #fff;
	font-size: 1.1rem;
	font-weight: 700;
	transition: all .3s;
	position: relative;
	overflow: hidden;
	z-index: 0;
	text-decoration: none;

	a {
		color: inherit;
		text-decoration: none;
		margin-right: 0.5rem;
	}

	&:visited {
		color: #fff;
	}

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #eb5e28;
		border-radius: 0.5rem;
		z-index: -2;
	}

	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 100%;
		background-color: color.adjust(#eb5e28, $lightness: -15%);
		transition: all .3s;
		border-radius: 0.5rem;
		z-index: -1;
	}

	&:hover {
		color: #fff;

		&:before {
			width: 100%;
		}
	}
}

// responsive
@media screen and (max-width: 600px) {
	.cta-button {
		font-size: 0.9rem;
	}
}
</style>