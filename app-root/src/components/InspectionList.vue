<template>
  <div class="inspection-container">
    <h2 class="title">Inspeções</h2>
    <Filter @filter-changed="filterInspections" />
    <div class="card-grid">
      <div
          v-for="inspection in paginatedInspections"
          :key="inspection.id"
          class="card"
          @click="viewDetail(inspection.id)"
      >
        <div class="card-content">
          <div class="card-detail">
            <strong>Contêiner:</strong> {{ inspection.container }}
          </div>
        </div>
      </div>
    </div>
    <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="changePage"
    />
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';
import Pagination from './Pagination.vue'; // Ensure correct import path
import Filter from './Filter.vue'; // Ensure correct import path

const inspections = ref([]);
const currentPage = ref(1);
const itemsPerPage = 9;
const searchText = ref('');
const router = useRouter();

const fetchInspections = async () => {
  try {
    const response = await axios.get('https://6689f9932c68eaf3211badbd.mockapi.io/api/void/inspections');
    inspections.value = response.data;
    console.log(inspections.value); // Log the inspections to verify data structure
  } catch (error) {
    console.error('Error fetching inspections:', error);
  }
};

const filterInspections = (text) => {
  searchText.value = text.toLowerCase();
  currentPage.value = 1; // Reset to the first page after filtering
};

const viewDetail = (id) => {
  router.push({name: 'InspectionDetail', params: {id}});
};

const filteredInspections = computed(() => {
  return inspections.value.filter(inspection => {
    // Convert inspection.container to a string before applying toLowerCase()
    return (inspection.container ? String(inspection.container).toLowerCase().includes(searchText.value) : false);
  });
});

const paginatedInspections = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredInspections.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredInspections.value.length / itemsPerPage);
});

const changePage = (page) => {
  currentPage.value = page;
};

onMounted(fetchInspections);

</script>

<style scoped>
.inspection-container {
  background-color: var(--color-background-soft); /* Usando variável de cor */
  padding: 20px;
  text-align: center;
}

.title {
  color: var(--color-text-light); /* Usando variável de cor */
  margin-bottom: 20px;
  font-size: 1.6rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
}

.card {
  background-color: var(--color-background); /* Usando variável de cor */
  border: 1px solid var(--color-border); /* Usando variável de cor */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
}

.card:hover {
  background-color: var(--color-background-mute); /* Usando variável de cor */
  border-color: var(--color-border-hover); /* Usando variável de cor */
}

.card-content {
  color: var(--color-text-muted); /* Usando variável de cor */
}

.card-detail {
  font-size: 1rem;
}

.card-detail strong {
  color: var(--color-text-light); /* Usando variável de cor */
}
</style>
