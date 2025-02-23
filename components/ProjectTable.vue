<template>
	<div class="project-container">
		<h2 class="project-title">{{ title }}</h2>
		<table class="project-table">
			<tbody>
			<tr v-for="(value, key) in details" :key="key" class="project-row">
				<td class="project-label">
					<span class="project-icon" v-html="icons[key]"></span>
					{{ labels[key] }}
				</td>
				<td class="project-value">
					<a v-if="key === 'githubLink' || key === 'productPage'" :href="value" target="_blank">{{
							value
						}}</a>
					<span v-else>{{ value }}</span>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>


<script setup>
import {defineProps} from 'vue';

const props = defineProps({
	title: {
		type: String,
		required: true
	},
	details: {
		type: Object,
		required: true
	}
});

const labels = {
	timeFrame: 'Time Frame',
	schoolYear: 'School Year',
	githubLink: 'GitHub Link',
	programmingLanguage: 'Programming Language',
	graphicsBackend: 'Graphics Backend',
	teamSize: 'Team Size',
	role: 'Role',
	projectType: 'Project Type',
	productPage: 'Product Page'
};

const icons = {
	timeFrame: '⏳',
	schoolYear: '🎓',
	githubLink: '🔗',
	programmingLanguage: '💻',
	graphicsBackend: '🎨',
	teamSize: '👥',
	role: '🎭',
	projectType: '🤝',
	productPage: '🚀'
};
</script>

<style scoped lang="scss">
.project-container {
	max-width: 600px;
	background: #f5f1ef;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	padding: 24px;
	border: 1px solid #ccc;
	box-sizing: border-box;

	.project-title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 16px;
		color: #333;
	}

	.project-table {
		width: 100%;
		border-collapse: collapse;

		.project-row {
			border-bottom: 1px solid #ddd;
			transition: background 0.2s;

			&:hover {
				background-color: #f0f0f0;
			}
		}

		.project-label {
			padding: 12px;
			font-weight: 600;
			color: #444;
			display: flex;
			align-items: center;

			.project-icon {
				margin-right: 8px;
				font-size: 18px;
			}
		}

		.project-value {
			padding: 12px;
			color: #666;
		}
	}
}
</style>
