<script>
import axios from 'axios';

export default {
  data() {
    return {
      inspections: [],
    };
  },
  created() {
    axios.get('https://mocki.io/v1/7fe81203-8999-4882-89c0-602e358d9f4b')
        .then((response) => {
          this.inspections = response.data;
        })
        .catch((error) => {
          console.error('error of fetching data!', error);
        });
  },
}
</script>

<template>

  <div>
    <h1>Container Inspection</h1>
    <ul>
      <li v-for="inspection in inspections" :key="inspection.id">
        <strong>Container Number: </strong> {{ inspection.container }}
        <strong>Container Status: </strong> {{ inspection.status }}
        <strong>Container Inspector: </strong> {{ inspection.inspector }}
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>