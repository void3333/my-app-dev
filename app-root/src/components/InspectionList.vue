<template>
  <div class="inspection-container">
    <h2 class="title">Inspeções</h2>
    <Filter @filter-changed="filterInspections"/>
    <div class="card-grid">
      <div
          v-for="inspection in paginatedInspections"
          :key="inspection.id"
          class="card"
          @click="viewDetail(inspection)"
      >
        <div class="card-content">
          <div class="card-detail">
            <strong>Contêiner:</strong> {{ inspection.container }}
          </div>
          <!-- Botão para abrir o modal, com ícone Font Awesome -->
          <button class="open-modal-button" @click.stop="openModal(inspection)">
            <font-awesome-icon class="open-modal-button" :icon="['fas', 'info-circle']"/>
          </button>
        </div>
      </div>
    </div>
    <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="changePage"
    />
    <Modal :isVisible="isModalVisible" @close="isModalVisible = false">
      <div v-if="selectedInspection">
        <h3>Detalhes da Inspeção</h3>
        <p><strong>Contêiner:</strong> {{ selectedInspection.container }}</p>
        <p><strong>Status:</strong> {{ selectedInspection.status }}</p>
        <p><strong>Inspector:</strong> {{ selectedInspection.inspector }}</p>
        <!-- Adicione outros detalhes da inspeção aqui -->
      </div>
    </Modal>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';
import Pagination from './Pagination.vue'; // Certifique-se de importar corretamente
import Filter from './Filter.vue'; // Certifique-se de importar corretamente
import Modal from './Modal.vue'; // Certifique-se de importar corretamente
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

const inspections = ref([]);
const currentPage = ref(1);
const itemsPerPage = 30;
const searchText = ref('');
const router = useRouter();
const isModalVisible = ref(false);
const selectedInspection = ref(null);

const fetchInspections = async () => {
  try {
    const response = await axios.get('https://6689f9932c68eaf3211badbd.mockapi.io/api/void/inspections');
    inspections.value = response.data;
  } catch (error) {
    console.error('Error fetching inspections:', error);
  }
};

const filterInspections = (text) => {
  searchText.value = text.toLowerCase();
  currentPage.value = 1; // Reset to the first page after filtering
};

const viewDetail = (inspection) => {
  router.push({name: 'InspectionDetail', params: {id: inspection.id}});
};

const openModal = (inspection) => {
  selectedInspection.value = inspection;
  isModalVisible.value = true;
};

const filteredInspections = computed(() => {
  return inspections.value.filter(inspection => {
    return (inspection.container ? String(inspection.container).toLowerCase().includes(searchText.value) : false);
  });
});

const paginatedInspections = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredInspections.value.slice(start, start + itemsPerPage);
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
/* Container and title styles remain unchanged */
.inspection-container {
  background-color: var(--color-background-soft);
  padding: 20px;
  text-align: center;
  min-height: 100vh;
}

.title {
  color: var(--color-text-light);
  margin-bottom: 20px;
  font-size: 1.6rem;
}

/* Grid layout */
.card-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 3 columns for desktops */
  gap: 20px;
  margin: 0 auto; /* Center grid with automatic margins */
  max-width: 1200px; /* Maximum width for grid */
}

/* Styles for tablets */
@media (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr); /* 2 columns for tablets */
    padding: 0 10px; /* Add padding on the sides */
    box-sizing: border-box; /* Include padding in element's total width */
    max-width: 700px; /* Maximum width for grid */
  }

  .open-modal-button {
    display: none;
  }

}

/* Styles for mobile devices */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 1 column for mobile devices */
    padding: 0 10px; /* Add padding on the sides */
    box-sizing: border-box; /* Include padding in element's total width */
    max-width: 400px; /* Maximum width for grid */
  }

  .open-modal-button {
    display: none;
  }

  .title {
    font-size: 1.4rem;
  }
}

/* Card styles */
.card {
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0; /* Remove margin to prevent overflow */
  box-sizing: border-box; /* Include border and padding in element's total width */
}

/* Hover effects */
.card:hover {
  background-color: var(--color-background-mute);
  border-color: var(--color-border-hover);
}

/* Card content styles */
.card-content {
  color: var(--color-text-muted);
  position: relative;
  flex: 1;
}

.card-detail {
  font-size: 1rem;
}

.card-detail strong {
  color: var(--color-text-light);
}

/* Modal button styles */
.open-modal-button {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: var(--color-icon);
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;
  z-index: 1;
}

.card:hover .open-modal-button {
  opacity: 1;
}

.open-modal-button i {
  margin: 0;
}

.open-modal-button:hover {
  color: var(--color-indigo-light);
}
</style>



