<!-- <script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Particles from './components/Particles.vue'

</script>

<template>
  <RouterView />
  <Particles/>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->

<template>
 <div class="app-container">
    <!-- Particles في الخلفية -->
    <Particles />

    <!-- المحتوى الرئيسي فوق الخلفية -->
    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Particles from './components/Particles.vue'
</script>

<style>
.app-container {
  position: relative !important;
  min-height: 100vh !important;
  overflow: hidden !important;
}

.content-container {
  position: relative !important;
  z-index: 1 !important; /* أعلى من الخلفية */
}
</style>
