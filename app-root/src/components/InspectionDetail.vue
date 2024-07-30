<template>
  <div class="inspection-detail">
    <button @click="goBack" class="back-button"><font-awesome-icon class="open-modal-button" :icon="['fas', 'arrow-left']"/></button>
    <h1 class="title">Detalhes da inspeção</h1>
    <div v-if="inspection">
      <div class="detail-item">
        <strong>Nº contêiner:</strong> {{ inspection.container }}
      </div>
      <div class="detail-item">
        <strong>Status:</strong> {{ inspection.status }}
      </div>
      <div class="detail-item">
        <strong>Inspetor:</strong> {{ inspection.inspector }}
      </div>
      <!-- add more -->
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon},
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
      router.push('/inspections');
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
  padding: 30px;
  margin: 0 auto;
  box-sizing: border-box; /* Include padding in element's total width */
  max-width: 1200px; /* Default max width */
  position: relative;
  border-bottom: 3px solid var(--color-indigo-light);
}

/* Styles for tablets and smaller devices */
@media (max-width: 1024px) {
  .inspection-detail {
    max-width: 800px; /* Smaller max width for tablets */
    padding: 20px 15px; /* Adjust padding */
  }
}

/* Styles for mobile devices */
@media (max-width: 768px) {
  .inspection-detail {
    max-width: 100%; /* Full width for mobile */
    padding: 20px 10px; /* Adjust padding */
  }

  .title {
    font-size: 1.6rem;
  }

  .detail-item {
    font-size: 1rem;
  }
}

.title {
  color: var(--color-text-light);
  margin-bottom: .2em;
  font-size: 1.5rem;
  text-align: center;
  margin-top: .4em;
}

.detail-item {
  font-size: 1.2rem;
}

.back-button {
  background-color: var(--color-indigo);
  color: var(--color-white);
  border: none;
  padding: 5px 7px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  cursor: pointer;
  font-size: .8rem;
  position: absolute;
  right: 0;
  top: 1em;
}

.back-button:hover {
  background-color: var(--color-indigo);
  opacity: 0.8;
}
</style>
