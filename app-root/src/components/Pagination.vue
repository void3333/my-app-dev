<template>
  <div class="pagination">
    <button @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1"><font-awesome-icon class="open-modal-button" :icon="['fas', 'arrow-left']"/></button>
    <span>Página {{ currentPage }} de {{ totalPages }}</span>
    <button @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages">
      <font-awesome-icon class="open-modal-button" :icon="['fas', 'arrow-right']"/></button>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon},
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit('page-changed', page);
      }
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 3em 0;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--color-indigo); /* Usando variável de cor */
  color: var(--color-white); /* Usando variável de cor */
  transition: background-color 0.3s;
}

button:disabled {
  background-color: var(--color-text-muted); /* Usando variável de cor */
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: var(--color-indigo-light); /* Usando variável de cor */
}
</style>
