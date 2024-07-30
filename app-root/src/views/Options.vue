<template>
  <div class="options-container">
    <h1 class="title">Opções</h1>

    <!-- Botão para mostrar a configuração de temas -->
    <button v-if="!showThemeConfig" @click="showThemeConfig = true" class="show-theme-config-button">
      Temas
    </button>

    <!-- Seção de configuração de temas -->
    <div v-if="showThemeConfig" class="theme-config">
      <button @click="showThemeConfig = false" class="back-button">
        Voltar
      </button>
      <h2>Selecionar Tema</h2>
      <button @click="toggleTheme" class="theme-toggle-button">
        <font-awesome-icon :icon="themeIcon" />
        <span class="sr-only">Toggle Theme</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const selectedTheme = ref('light'); // Default value to 'light' initially
const initialLoad = ref(true); // Flag to track initial load
const showThemeConfig = ref(false); // Flag to show/hide theme configuration

// Define theme icon based on the current theme
const themeIcon = computed(() => {
  return selectedTheme.value === 'light' ? faMoon : faSun;
});

// Apply the saved theme after the component is mounted
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light'
  selectedTheme.value = savedTheme;
  document.documentElement.setAttribute('data-theme', savedTheme);
  initialLoad.value = false; // Mark as no longer initial load after mounting
});

// Watch for changes in the theme and update accordingly
watch(selectedTheme, (newTheme) => {
  if (initialLoad.value) return; // Prevent applying theme during initial load
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Toggle theme between light and dark
const toggleTheme = () => {
  selectedTheme.value = selectedTheme.value === 'light' ? 'dark' : 'light';
};
</script>

<style scoped>
.options-container {
  background-color: var(--color-background-soft);
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.title {
  color: var(--color-text-light);
  margin-bottom: 20px;
  font-size: 2rem;
}

h2 {
  margin-top: 1em;
}

.show-theme-config-button {
  background-color: var(--color-indigo);
  color: var(--color-white);
  border: none;
  padding: 0.5em 1em;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 4.72em;
}

.show-theme-config-button:hover {
  background-color: var(--color-indigo-light);
}

.theme-config {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-button {
  background-color: var(--color-indigo);
  color: var(--color-white);
  border: none;
  padding: 0.5em 1em;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;
}

.back-button:hover {
  background-color: var(--color-indigo-light);
}

.theme-toggle-button {
  background-color: var(--color-indigo);
  color: var(--color-white);
  border: none;
  padding: 0.3em;
  width: 1.6em;
  border-radius: 50%;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.3em;
  margin-bottom: 2em;
}

.theme-toggle-button:hover {
  background-color: var(--color-indigo-light);
}

/* Accessibility: visually hide screen reader text while keeping it readable */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

@media (max-width: 768px) {
  .options-container {
    padding: 10px;
  }

  .title {
    font-size: 1.5rem;
  }

  .show-theme-config-button,
  .back-button {
    padding: 0.3em 0.6em;
    font-size: 0.9rem;
  }

  .theme-toggle-button {
    font-size: 1.5rem;
  }
}
</style>
