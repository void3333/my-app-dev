<template>
  <div class="inspection-detail">
    <button @click="goBack" class="back-button">Back</button>
    <h1 class="title">Inspection Detail</h1>
    <div v-if="inspection">
      <div class="detail-item">
        <strong>Container Number:</strong> {{ inspection.container }}
      </div>
      <div class="detail-item">
        <strong>Container Status:</strong> {{ inspection.status }}
      </div>
      <div class="detail-item">
        <strong>Container Inspector:</strong> {{ inspection.inspector }}
      </div>
      <!-- Add more details as needed -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const inspection = ref(null);
    const route = useRoute();
    const router = useRouter();

    const fetchInspection = async () => {
      const id = route.params.id;
      if (id) {
        try {
          const response = await axios.get(`https://6689f9932c68eaf3211badbd.mockapi.io/api/void/inspections/${id}`);
          // Extract the object from the response
          inspection.value = response.data;
        } catch (error) {
          console.error('Error fetching inspection detail:', error);
        }
      } else {
        console.error('Inspection ID is undefined');
      }
    };

    const goBack = () => {
      router.push('/');
    };

    onMounted(fetchInspection);

    return {
      inspection,
      goBack
    };
  }
};
</script>

<style scoped>
.inspection-detail {
  background-color: var(--color-background-soft);
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;
}

.title {
  color: var(--color-text-light);
  margin-bottom: 20px;
  font-size: 2rem;
  text-align: center;
}

.detail-item {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.back-button {
  background-color: var(--color-indigo);
  color: var(--color-white);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.back-button:hover {
  background-color: var(--color-indigo);
  opacity: 0.8;
}
</style>
