<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <img src="@/assets/logo-nav.webp" alt="Logo">
      </div>
      <nav class="nav">
        <router-link to="/">
          <font-awesome-icon class="open-modal-button" :icon="['fas', 'house']"/>
        </router-link>
        <router-link to="/inspections">
          <font-awesome-icon class="open-modal-button" :icon="['fas', 'user-secret']"/>
        </router-link>
        <router-link to="/options">
          <font-awesome-icon class="open-modal-button" :icon="['fas', 'cog']"/>
        </router-link>
      </nav>
      <div class="hamburger" @click="toggleMenu">
        <span :class="{ 'open': menuOpen }"></span>
        <span :class="{ 'open': menuOpen }"></span>
        <span :class="{ 'open': menuOpen }"></span>
      </div>
    </div>
    <nav class="mobile-nav" :class="{ 'open': menuOpen }">
      <router-link @click="toggleMenu" to="/">Dashboard</router-link>
      <router-link @click="toggleMenu" to="/inspections">Inspeções</router-link>
      <router-link @click="toggleMenu" to="/options">Opções</router-link>
    </nav>
  </header>
</template>

<script setup>
import {ref} from 'vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.header {
  background: linear-gradient(to bottom, var(--color-indigo) 0%, var(--color-indigo-light) 100%);
  color: var(--color-white);
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: solid 1px rgba(255, 255, 255, 0.39);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.logo {
  height: 40px;
}

.logo img {
  height: 100%;
  display: block;
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

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--color-white);
  margin: 4px 0;
  transition: all 0.3s ease-in-out;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

.mobile-nav {
  display: none;
  flex-direction: column;
  gap: 10px;
  background-color: var(--color-indigo-light);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  width: 100%;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  max-height: 0;
  height: 15em;
  overflow: hidden;
  opacity: 0;
  position: absolute;
  top: 4em;
}

.mobile-nav.open {
  display: flex;
  max-height: 500px; /* Adjust according to the content */
  opacity: 1;
}

.mobile-nav a {
  text-align: center;
  color: var(--color-white);
  text-decoration: none;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .header-content {
    width: 100%;
  }

  .mobile-nav {
    display: flex;
  }
}
</style>

