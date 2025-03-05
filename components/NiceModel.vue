<template>
  <div class="nice-model">
	<div class="canvas-wrapper" ref="wrapper">
		<TresCanvas class="tres-canvas">
			<TresPerspectiveCamera :fov="fov"/>
			<OrbitControls :enable-zoom="false" :auto-rotate="true" :enable-damping="true" :min-distance="distance"
						   :max-distance="distance"/>
			<TresDirectionalLight :intensity="3" :position="[1, 2, 0]"/>
			<TresMesh>
				<TresIcosahedronGeometry :args="[radius, 1]"/>
				<TresMeshToonMaterial color="#403d39"/>
			</TresMesh>
			<TresMesh>
				<TresIcosahedronGeometry :args="[radius + 0.009, 1]"/>
				<TresMeshBasicMaterial color="#eb5e28" :wireframe="true"/>
			</TresMesh>
		</TresCanvas>
	</div>
  </div>
</template>

<script>
import * as THREE from 'three';
import {OrbitControls} from "@tresjs/cientos";
import {useLoader} from '@tresjs/core';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {computed, useTemplateRef} from "vue";

export default {
	name: "NiceModel",
	components: {OrbitControls},
	async setup() {
		const radius = computed(() => 0.85);
		const fov = computed(() => 70);

		const distance = ref(0);

		//await useLoader(GLTFLoader, 'assets/models/watercolor_bird.glb');

		function onResize() {
			distance.value = 1.65;
		}

		onMounted(() => {
			window.addEventListener('resize', onResize);

			onResize();
		});

		onUnmounted(() => {
			window.removeEventListener('resize', onResize);
		})

		return {
			//1birb
			distance,
			radius,
			fov
		}
	}
}
</script>

<style scoped lang="scss">
.nice-model {
  position: relative;
  width: 100%;
  padding-top: 100%;
}

.canvas-wrapper {
	position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>