<template>
  <div class="inspection-container">
    <h2 class="title">Inspeções</h2>
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

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Pagination from './Pagination.vue'; // Certifique-se de importar o componente de paginação

export default {
  components: {
    Pagination
  },
  setup() {
    const inspections = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = 9;
    const router = useRouter();

    const fetchInspections = async () => {
      try {
        const response = await axios.get('https://6689f9932c68eaf3211badbd.mockapi.io/api/void/inspections');
        inspections.value = response.data;
      } catch (error) {
        console.error('Error fetching inspections:', error);
      }
    };

    const viewDetail = (id) => {
      router.push({ name: 'InspectionDetail', params: { id } });
    };

    const paginatedInspections = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return inspections.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(inspections.value.length / itemsPerPage);
    });

    const changePage = (page) => {
      currentPage.value = page;
    };

    onMounted(fetchInspections);

    return {
      inspections,
      currentPage,
      totalPages,
      paginatedInspections,
      viewDetail,
      changePage
    };
  }
};
</script>

<style scoped>
.inspection-container {
  background-color: var(--color-background-soft); /* Usando variável de cor */
  padding: 20px;
  min-width: 1200px;
  text-align: center;
}

.title {
  color: var(--color-text-light); /* Usando variável de cor */
  margin-bottom: 20px;
  font-size: 1.6rem;
  text-align: center;
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
