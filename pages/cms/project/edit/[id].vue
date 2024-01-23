<template>
	<div class="edit-project">
		<h2>Edit Project</h2>
		<form v-if="project" @submit.prevent="editProject">
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
import Markdown from 'vue3-markdown-it';

export default {
	name: 'Edit Project',
	title: "Ferri's Portfolio",
	components: {
		Markdown
	},
	setup() {
		const project = ref(null);
		const route = useRoute();
		const router = useRouter();

		apiManager.getProject(route.params.id).then((result) => {
			project.value = result.data;

			project.value.startDate = new Date(project.value.startDate).toLocaleDateString('en-CA');
			project.value.is_published = !!project.value.is_published;
			if (!!project.repositoryUrl) {
				project.value.repositoryUrl = undefined;
			}
		}).catch((error) => {
			console.error("Failed making GET call to get articles!", error);
		});

		const editProject = (projectId) => {
			project.value.startDate = new Date(project.value.startDate).toLocaleDateString('en-CA');
			project.value.is_published = !!project.value.is_published;
			if (!!project.repositoryUrl) {
				project.value.repositoryUrl = undefined;
			}
			apiManager.editProject({
				id: projectId,
				...project.value
			}).then((result) => {
				router.push(`/cms/projects`);
			});
		};

		return {
			project,
			editProject
		}
	}
}
</script>

<style lang="scss" scoped>
.edit-project {
	margin: 20px;
	width: 50%;
}

input,
textarea,
button {
	width: 100%;
}
</style>
  