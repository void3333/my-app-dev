<!-- Layout.vue -->
<template>
  <div id="layout">
    <Header/>
    <router-view/>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import Header from '../../src/components/Header.vue';

const route = useRoute();

const showHeader = computed(() => {
  // O cabeçalho não deve aparecer na página de detalhes da inspeção
  return route.name !== 'InspectionDetail';
});
</script>

<style scoped>
#layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
