<template>
  <div class="inspection-container">
    <h1 class="title">Inspection List</h1>
    <div class="card-grid">
      <div
          v-for="inspection in inspections"
          :key="inspection.id"
          class="card"
          @click="viewDetail(inspection.id)"
      >
        <div class="card-content">
          <div class="card-detail">
            <strong>Container Number:</strong> {{ inspection.container }}
          </div>
          <div class="card-detail">
            <strong>Container Status:</strong> {{ inspection.status }}
          </div>
          <div class="card-detail">
            <strong>Container Inspector:</strong> {{ inspection.inspector }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const inspections = ref([]);
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

    onMounted(fetchInspections);

    return {
      inspections,
      viewDetail
    };
  }
};
</script>

<style scoped>
.inspection-container {
  background-color: var(--color-background-soft);
  padding: 20px;
  border-radius: 8px;
  max-width: 1200px;
  margin: auto;
}

.title {
  color: var(--color-text-light);
  margin-bottom: 20px;
  font-size: 2rem;
  text-align: center;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
}

.card {
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
}

.card:hover {
  background-color: var(--color-background-mute);
  border-color: var(--color-border-hover);
}

.card-content {
  color: var(--color-text-muted);
}

.card-detail {
  margin-bottom: 10px;
  font-size: 1rem;
}

.card-detail strong {
  color: var(--color-text-light);
}
</style>
