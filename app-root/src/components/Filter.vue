<template>
  <div class="filter">
    <input
        type="text"
        v-model="searchText"
        placeholder="Buscar..."
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const searchText = ref('');
const emit = defineEmits(['filter-changed']);

// Emit the filter-changed event whenever the search text changes
watch(searchText, (newText) => {
  emit('filter-changed', newText);
});
</script>

<style scoped>
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  width: 300px;
}
</style>
