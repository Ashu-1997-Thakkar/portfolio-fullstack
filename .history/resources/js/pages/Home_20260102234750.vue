<template>
  <div class="container mt-5">
    <h2 class="mb-3 text-center">Skills</h2>

    <div class="row" v-if="skills.length">
      <div
        class="col-md-4 mb-3"
        v-for="skill in skills"
        :key="skill.id"
      >
        <v-card>
          <v-card-text class="text-center">
            <h5>{{ skill.name }}</h5>
            <p>{{ skill.level }}</p>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <p v-else class="text-center text-muted">
      No skills found
    </p>

    <div class="text-center mt-3">
      <v-btn color="primary" @click="addSkill">
        Add Dummy Skill
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useSkillStore } from '../store/skillStore';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2';

const store = useSkillStore();
const { skills } = storeToRefs(store); // ✅ FIX

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
