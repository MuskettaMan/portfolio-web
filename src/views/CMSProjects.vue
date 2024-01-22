<template>
    <div class="projects">
        <h2>Projects</h2>
        <CMSTable :edit-callback="editProject" :data="projects" :columns="columns" />
    </div>
</template>
  
<script>
import axios from 'axios'
import { ref } from "vue";
import { useRouter } from "vue-router";
import store from '@/store'
import CMSTable from "@/components/CMSTable.vue";
import apiManager from "@/scripts/apiManager";

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
            router.push(`/cms/projects/${project.id}`)
        };

		const columns = [
			{ label: 'ID', key: 'id' },
			{ label: 'Title', key: 'title' },
			{ label: 'Description', key: 'description' },
			{ label: 'Published', key: 'is_published', func: (item) => { return item ? 'Yes' : 'No'; }, keyIsClass: true }
		]

        return {
            projects,
            formatDate,
            editProject,
			columns
        }
    }
}
</script>
  
<style lang="scss" scoped>

</style>
  