<template>
  <div class="filter">
    <input
        type="text"
        v-model="searchText"
        placeholder="Search..."
    />
    <button @click="applyFilter">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ''
    };
  },
  methods: {
    applyFilter() {
      this.$emit('filter-changed', this.searchText);
    }
  }
}
</script>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  width: 200px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--color-indigo);
  color: var(--color-white);
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--color-black-soft);
}
</style>
