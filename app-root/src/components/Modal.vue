<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps({
  isVisible: Boolean
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
}

.modal-content {
  background-color: var(--color-background); /* Usando variável de cor */
  color: var(--color-text); /* Usando variável de cor */
  border: 1px solid var(--color-border); /* Usando variável de cor */
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  max-width: 500px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text); /* Usando variável de cor */
}

.close-button:hover {
  color: var(--color-text-hover); /* Usando variável de cor */
}
</style>
