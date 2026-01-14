import { defineStore } from 'pinia';
import axios from 'axios';

export const useSkillStore = defineStore('skill', {
    state: () => ({
        skills: [],
    }),

    actions: {
        async fetchSkills() {
            const res = await axios.get('/skills');
            this.skills = res.data;
        },

        async addSkill(data) {
            await axios.post('/skills', data);
            this.fetchSkills();
        }
    }
});
