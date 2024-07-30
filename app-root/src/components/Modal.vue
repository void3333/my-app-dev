<template>
  <div class="modal-overlay" v-if="isVisible" @click.self="closeModal">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

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
  background-color: var(--color-background); /* Using color variable */
  color: var(--color-text); /* Using color variable */
  border: 1px solid var(--color-border); /* Using color variable */
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  max-width: 500px;
  position: relative;
}

</style>
