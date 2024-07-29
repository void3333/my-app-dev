<template>
  <router-view />
</template>

<script>
import InspectionList from './components/InspectionList.vue';
import InspectionDetail from "@/components/InspectionDetail.vue";
export default {
  components: {
    InspectionDetail,
    InspectionList,
  },
};
</script>

<style scoped>

</style>
