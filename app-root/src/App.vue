<template>
  <router-view/>
</template>

<script>
import InspectionList from './components/InspectionList.vue';
import InspectionDetail from "@/components/InspectionDetail.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
    InspectionDetail,
    InspectionList,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>