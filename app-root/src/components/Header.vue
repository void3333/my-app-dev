<template>
<header class="header">
  <div class="header-content">
    <div class="logo">Conformity</div>
    <nav class="nav">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/inspections">Inspeções</router-link>
      <router-link to="/options">Opções</router-link>
    </nav>
  </div>
</header>
</template>

<style scoped>
.header {
  background-color: var(--color-indigo);
  color: var(--color-white);
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  min-width: 1200px;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: var(--color-white);
  text-decoration: none;
  font-size: 1rem;
}

.nav a:hover {
  text-decoration: underline;
}
</style>