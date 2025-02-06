<template>
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
				<TresIcosahedronGeometry :args="[radius, 1]"/>
				<TresMeshBasicMaterial color="#eb5e28" :wireframe="true"/>
			</TresMesh>
		</TresCanvas>
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

		// TODO: Distancing from camera is not responsive!
		function getOptimalCameraDistance(fov, divWidth, divHeight, sphereRadius) {
			const aspectRatio = divWidth / divHeight;
			const fovRadians = (fov * Math.PI) / 180; // Convert FOV to radians
			const halfFov = fovRadians / 2;

			// Compute distances needed to fit the sphere
			const verticalDistance = sphereRadius / Math.sin(halfFov);
			const horizontalDistance = (sphereRadius * aspectRatio) / Math.sin(halfFov);

			// Use the larger one to ensure visibility
			return Math.max(verticalDistance, horizontalDistance);
		}

		const wrapperEl = useTemplateRef("wrapper");
		const radius = computed(() => 0.85);
		const fov = computed(() => 70);

		const distance = ref(0);

		//await useLoader(GLTFLoader, 'assets/models/watercolor_bird.glb');

		function onResize() {
			distance.value = 1.65;//getOptimalCameraDistance(fov.value, wrapperEl.value.offsetWidth, wrapperEl.value.offsetHeight, radius.value);
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

.canvas-wrapper {
	height: 100%;
	width: 100%;
}
</style>