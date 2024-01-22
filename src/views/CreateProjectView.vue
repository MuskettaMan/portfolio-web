<template>
	<div class="create-project">
		<h2>Create Project</h2>
		<form v-if="project" @submit.prevent="createProject">
			<div class="form-group">
				<label for="title">Title:</label>
				<input type="text" v-model="project.title" id="title" required/>
			</div>

			<div class="form-group">
				<label for="description">Description:</label>
				<textarea v-model="project.description" id="description" required></textarea>
			</div>

			<div class="form-group">
				<label for="startDate">Start date:</label>
				<input type="date" v-model="project.startDate" id="startDate" required/>
			</div>

			<div class="form-group">
				<label for="markdown">Markdown:</label>
				<textarea v-model="project.markdown" id="markdown" required></textarea>
			</div>

			<div class="form-group">
				<label for="environment">Environment:</label>
				<input type="text" v-model="project.environment" id="environment" required/>
			</div>

			<div class="form-group">
				<label for="programmingLanguage">Programming Language:</label>
				<input type="text" v-model="project.programmingLanguage" id="programmingLanguage" required/>
			</div>

			<div class="form-group">
				<label for="repositoryUrl">Repository URL:</label>
				<input type="text" v-model="project.repositoryUrl" id="repositoryUrl"/>
			</div>

			<div class="form-group">
				<label for="is_published">Is Published:</label>
				<input type="checkbox" v-model="project.is_published" id="is_published"/>
			</div>

			<button type="submit">Save Changes</button>
		</form>
	</div>
</template>

<script>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import store from '@/store'
import Markdown from 'vue3-markdown-it';
import apiManager from "@/scripts/apiManager";

export default {
	name: 'Create Project',
	title: "Ferri's Portfolio",
	components: {
		Markdown
	},
	setup() {
		const project = ref({startDate: new Date(Date.now()).toLocaleString('en-CA').split(',')[0]});
		const route = useRoute();
		const router = useRouter();

		const createProject = (projectId) => {
			project.value.is_published = project.value.is_published ? 1 : 0;
			if (!!project.repositoryUrl) {
				project.value.repositoryUrl = undefined;
			}
			apiManager.createProject({
				...project.value
			}).then((result) => {
				router.push(`/cms/projects`);
			});
		};

		return {
			project,
			createProject
		}
	}
}
</script>

<style lang="scss" scoped>
.create-project {
	margin: 20px;
	width: 50%;
}

input,
textarea,
button {
	width: 100%;
}
</style>
  