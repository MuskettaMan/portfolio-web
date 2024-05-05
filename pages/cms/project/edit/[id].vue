<template>
	<div class="edit-project">
		<h2>Edit Project</h2>
		<form v-if="project" @submit.prevent="editProject">
			<div class="form-group">
				<label for="title">Title:</label>
				<input type="text" v-model="project.project.title" id="title" required/>
			</div>

			<div class="form-group">
				<label for="description">Description:</label>
				<textarea v-model="project.project.description" id="description" required></textarea>
			</div>

			<div class="form-group">
				<label for="startDate">Start date:</label>
				<input type="date" v-model="project.project.startDate" id="startDate" required/>
			</div>

			<div class="section" v-for="(item, index) in project.sections" :key="index">
				<h3>Section {{ index + 1 }}</h3>
				<button @click="project.sections.splice(index, 1)" type="button">Remove</button>
				<div class="form-group">
					<label for="title">Title:</label>
					<input type="text" v-model="item.title" id="title" required/>
				</div>
				<div class="form-group">
					<label for="markdown">Markdown:</label>
					<textarea v-model="item.description" :id="`markdown-${index}`"
							  required></textarea>
				</div>
				<div class="form-group">
					<label for="media_id">Media ID:</label>
					<input type="number" v-model="item.media_id" :id="`media_id-${index}`" required/>
				</div>
			</div>
			<button @click="addProject" type="button">Add section</button>

			<div class="form-group">
				<label for="environment">Environment:</label>
				<input type="text" v-model="project.project.environment" id="environment" required/>
			</div>

			<div class="form-group">
				<label for="programmingLanguage">Programming Language:</label>
				<input type="text" v-model="project.project.programmingLanguage" id="programmingLanguage" required/>
			</div>

			<div class="form-group">
				<label for="repositoryUrl">Repository URL:</label>
				<input type="text" v-model="project.project.repositoryUrl" id="repositoryUrl"/>
			</div>

			<div class="form-group">
				<label for="is_published">Is Published:</label>
				<input type="checkbox" v-model="project.is_published" id="is_published"/>
			</div>

			<div class="form-group">
				<label for="tags">Tags:</label>
				<input type="text" v-model="project.tags" id="tags"/>
			</div>

			<div class="form-group">
				<label for="thumbnail">Thumbnail:</label>
				<input type="number" v-model="project.banner" :id="`thumbnail`" required/>
			</div>
			
			<div class="form-group">
				<label for="banner">Banner:</label>
				<input type="number" v-model="project.banner" :id="`banner`" required/>
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
			console.log(project.value)
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

		const addProject = () => {
			project.value.sections.push({title: "", description: ""});
		}

		return {
			project,
			editProject,
			addProject
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
  