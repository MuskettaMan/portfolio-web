<template>
	<div class="projects">
		<h2>Projects</h2>
		<CMSTable :edit-callback="editProject" :delete-callback="deleteProject" :data="projects" :columns="columns"/>
		<button @click="createProject" class="create-button">Create</button>
	</div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import CMSTable from "@/components/CMSTable.vue";

export default {
	name: 'CMSProjectsView',
	title: "Ferri's Portfolio",
	components: {
		CMSTable
	},
	setup() {
		const projects = ref([]);
		const router = useRouter();

		apiManager.getProjects().then((result) => {
			projects.value = result.data;
		});

		const formatDate = (date) => {
			return new Date(date).toLocaleDateString();
		};
		const editProject = (project) => {
			router.push(`/cms/project/edit/${project.id}`)
		};

		const deleteProject = (project) => {
			apiManager.deleteProject(project.id).then((result) => {
				projects.value = projects.value.filter((item) => {
					return item.id !== project.id;
				});
			});
		};

		const createProject = () => {
			router.push(`/cms/project/create`)
		};

		const columns = [
			{label: 'ID', key: 'id'},
			{label: 'Title', key: 'title'},
			{label: 'Description', key: 'description'},
			{
				label: 'Published', key: 'is_published', func: (item) => {
					return item ? 'Yes' : 'No';
				}, keyIsClass: true
			}
		]

		return {
			projects,
			columns,
			formatDate,
			editProject,
			deleteProject,
			createProject
		}
	}
}
</script>

<style lang="scss" scoped>

.create-button {
	font-weight: bold;
}
</style>
  