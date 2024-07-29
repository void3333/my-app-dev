<!-- Options.vue -->
<template>
  <div class="options-container">
    <h1 class="title">Opções</h1>
    <div class="theme-selector">
      <h2>Selecionar Tema</h2>
      <label>
        <input type="radio" value="light" v-model="selectedTheme" />
        Light
      </label>
      <label>
        <input type="radio" value="dark" v-model="selectedTheme" />
        Dark
      </label>
      <button @click="applyTheme">Aplicar</button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue';

const selectedTheme = ref('light'); // Default theme

const applyTheme = () => {
  document.documentElement.setAttribute('data-theme', selectedTheme.value);
  localStorage.setItem('theme', selectedTheme.value);
};

// Apply the saved theme on component mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  selectedTheme.value = savedTheme;
  document.documentElement.setAttribute('data-theme', savedTheme);
});
</script>

<style scoped>
.options-container {
  background-color: var(--color-background-soft);
  padding: 20px;
  min-width: 1200px;
  text-align: center;
}

.title {
  color: var(--color-text-light);
  margin-bottom: 20px;
  font-size: 2rem;
}

.theme-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--color-indigo);
  color: var(--color-white);
}
</style>
