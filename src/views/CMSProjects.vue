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

export default {
    name: 'CMSProjectsView',
    title: "Ferri's Portfolio",
    components: {
		CMSTable
    },
    setup() {
        const projects = ref([]);
        const router = useRouter();

        axios.get('https://ferri.dev/api/projects').then((result) => {
            projects.value = result.data.data;
        }).catch((error) => {
            console.error("Failed making GET call to get projects!", error);
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
			{ label: 'Description', key: 'description' }
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
  