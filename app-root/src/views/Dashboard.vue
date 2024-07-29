<!-- Dashboard.vue -->
<template>
  <div class="dashboard-container">
    <h1 class="title">Dashboard</h1>
    <p class="inspections-count">Total de Inspeções: {{ totalInspections }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const totalInspections = ref(0);

const fetchInspectionsCount = async () => {
  try {
    const response = await axios.get('https://6689f9932c68eaf3211badbd.mockapi.io/api/void/inspections');
    totalInspections.value = response.data.length; // Count of total inspections
  } catch (error) {
    console.error('Error fetching inspections count:', error);
  }
};

onMounted(fetchInspectionsCount);
</script>

<style scoped>
.dashboard-container {
  background-color: var(--color-background-soft);
  padding: 20px;
  max-width: 1200px;
  text-align: center;
}

.title {
  color: var(--color-text-light);
  margin-bottom: 20px;
  font-size: 2rem;
}

.inspections-count {
  font-size: 1.5rem;
  color: var(--color-text-muted);
}
</style>
