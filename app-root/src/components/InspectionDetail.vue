<template>
  <div class="inspection-detail">
    <button @click="goBack" class="back-button">
      <font-awesome-icon class="back-icon" :icon="['fas', 'arrow-left']"/>
    </button>
    <h1 class="title">Detalhes da Inspeção</h1>
    <div v-if="inspection">
      <div class="detail-card">
        <div class="detail-item">
          <strong>Nº contêiner:</strong> {{ inspection.container }}
        </div>
        <div class="detail-item">
          <strong>Status:</strong> {{ inspection.status }}
        </div>
        <div class="detail-item">
          <strong>Inspetor:</strong> {{ inspection.inspector }}
        </div>
      </div>

      <!-- Button to Open Image Gallery -->
      <button @click="openGallery" class="open-gallery-button">
        <font-awesome-icon class="gallery-icon" :icon="['fas', 'images']"/>
        Mostrar imagens
      </button>

      <!-- Image Gallery Modal -->
      <Modal :isVisible="showingGallery" @close="showingGallery = false">
        <div class="image-gallery-content">
          <div class="gallery-grid">
            <div v-for="(image, index) in paginatedImages" :key="index" class="gallery-item">
              <img :src="image" alt="Inspection Image">
            </div>
          </div>

          <!-- Pagination Controls -->
          <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">
              <font-awesome-icon class="pagination-icon" :icon="['fas', 'arrow-left']"/>
            </button>
            <span>Página {{ currentPage }} de {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">
              <font-awesome-icon class="pagination-icon" :icon="['fas', 'arrow-right']"/>
            </button>
          </div>
        </div>
      </Modal>
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, computed} from 'vue';
import axios from 'axios';
import {useRoute, useRouter} from 'vue-router';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import Modal from './Modal.vue'; // Ensure the path is correct

export default {
  components: {FontAwesomeIcon, Modal},
  setup() {
    const inspection = ref(null);
    const images = ref([]);
    const currentPage = ref(1);
    const imagesPerPage = 9; // Number of images per page
    const totalPages = computed(() => Math.ceil(images.value.length / imagesPerPage));
    const showingGallery = ref(false);

    const route = useRoute();
    const router = useRouter();

    const fetchInspection = async () => {
      const id = route.params.id;
      if (id) {
        try {
          const response = await axios.get(`https://6689f9932c68eaf3211badbd.mockapi.io/api/void/inspections/${id}`);
          inspection.value = response.data;

          // Fetching images for the inspection
          const imageCount = 27; // Total number of images for 3 pages
          images.value = Array.from({length: imageCount}, (_, i) => `https://picsum.photos/seed/${id + i}/200/120`);
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

    const paginatedImages = computed(() => {
      const startIndex = (currentPage.value - 1) * imagesPerPage;
      const endIndex = startIndex + imagesPerPage;
      return images.value.slice(startIndex, endIndex);
    });

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
      }
    };

    const openGallery = () => {
      showingGallery.value = true;
    };

    onMounted(fetchInspection);

    return {
      inspection,
      goBack,
      paginatedImages,
      currentPage,
      totalPages,
      prevPage,
      nextPage,
      openGallery,
      showingGallery
    };
  }
};
</script>

<style scoped>
:root {
  --color-background-soft: #f4f4f4;
  --color-indigo: #3f51b5;
  --color-indigo-light: #c5cae9;
  --color-text-light: #ffffff;
  --color-white: #ffffff;
  --color-text: #333;
  --color-border: #ddd;
  --color-text-hover: #000;
}

.inspection-detail {
  background-color: var(--color-background-soft);
  padding: 30px;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1200px;
  position: relative;
  border-bottom: 3px solid var(--color-indigo-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1024px) {
  .inspection-detail {
    max-width: 800px;
    padding: 20px 15px;
  }
}

@media (max-width: 768px) {
  .inspection-detail {
    max-width: 100%;
    padding: 20px 10px;
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

.detail-card {
  background: var(--color-background-soft);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-top: 1em;
}

.detail-item {
  font-size: 1.2rem;
  margin-bottom: 10px;
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

.open-gallery-button {
  background-color: var(--color-indigo);
  color: var(--color-white);
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-icon {
  margin-right: 8px;
}

.image-gallery-content {
  background: var(--color-white);
  border-radius: 8px;
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns for 3x3 grid */
  gap: 10px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.05);
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background-color: var(--color-indigo);
  color: var(--color-white);
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  font-size: 1rem;
}

.pagination button:disabled {
  background-color: #b0bec5;
  cursor: not-allowed;
}

.pagination span {
  align-self: center;
  font-size: 1rem;
}
</style>
