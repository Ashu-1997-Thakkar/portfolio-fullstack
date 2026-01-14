import { defineStore } from 'pinia';
import axios from 'axios';

export const useProjectStore = defineStore('project', {
    state: () => ({
        projects: [],
    }),

    actions: {
        async fetchProjects() {
            const res = await axios.get('/projects');
            this.projects = res.data;
        }
    }
});
