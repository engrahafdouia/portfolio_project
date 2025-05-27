<template>
  <div id="particles-js" class="particles-bg"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (window.particlesJS) {
    window.particlesJS.load('particles-js', '/particles.json', function () {
      console.log('Particles.js config loaded 🎉')
    })
  } else {
    console.error('particlesJS not found on window')
  }
})
</script>

<style scoped>
.particles-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #000; /* فقط للتجربة */
}
</style>
