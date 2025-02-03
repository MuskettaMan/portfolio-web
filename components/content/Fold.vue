<template>
	<div class="fold">
		<button @click="click">
			<font-awesome-icon :icon="['fa-brands', 'linkedin']"/>
		</button>
		<slot/>
		<div class="content" :class="{ shown: folded }" ref="fold-content">
			<slot name="content"/>
		</div>
	</div>
</template>

<script>
import {ref, nextTick} from 'vue';
import gsap from 'gsap'

export default {
	name: "FoldComponent",
	props: {},
	setup() {
		const folded = ref(false);
		const foldContent = useTemplateRef('fold-content');

		const click = async () => {
			folded.value = !folded.value;

			await nextTick();
			if (folded.value)
				gsap.to(foldContent, {height: 'auto', opacity: 1, duration: 0.3, ease: "power2.out"});
			else
				gsap.to(foldContent, {height: 'auto', opacity: 0, duration: 0.3, ease: "power2.in"});
		}

		return {
			folded,
			click
		}
	}
}
</script>

<style scoped lang="scss">
.fold {
	.content {
		width: 100%;
		transition: opacity 1s ease-in-out;
		opacity: 0;
		//height: 0;
		overflow: hidden;
	}
}
</style>
