<template>
  <div class="container mt-5">
    <h2 class="mb-3">Skills</h2>

    <div class="row">
      <div class="col-md-4 mb-3" v-for="skill in skills" :key="skill.id">
        <v-card>
          <v-card-text>
            <h5>{{ skill.name }}</h5>
            <p>{{ skill.level }}</p>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <v-btn color="primary" @click="addSkill">
      Add Dummy Skill
    </v-btn>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useSkillStore } from '../store/skillStore';
import Swal from 'sweetalert2';

const store = useSkillStore();

const skills = store.skills;

onMounted(() => {
  store.fetchSkills();
});

const addSkill = async () => {
  await store.addSkill({
    name: 'Laravel',
    level: 'Advanced'
  });

  Swal.fire('Success', 'Skill Added', 'success');
};
</script>
