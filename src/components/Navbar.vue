<template>
  <nav class="navbar navbar-expand-lg navbar-transparent  navbar-text">
 <div class="container">

  <a class="navbar-brand navbar-text" href="#">

     <img src="../assets/logo.png" width="50" alt="">
    </a>
  <button class="navbar-toggler"
   type="button"
   data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"

     aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigaqtion">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link navbar-text" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar-text"  href="#skills">Skills</a>

      </li>
      <li class="nav-item">
        <a class="nav-link navbar-text" href="#about">About</a>

      </li>
      <li class="nav-item">
        <a class="nav-link navbar-text" href="#projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navbar-text" href="#">Contact</a>
      </li>




    </ul>

  </div>
 </div>
</nav>
</template>
<script setup>
import { ref } from 'vue'
const colors = ['#3B5CC6', '#FF0B55']
const selectedColor = ref(colors[0])

function selectColor(color) {
  selectedColor.value = color;
  document.documentElement.style.setProperty('--main-color', color);
}

</script>

<style scoped>
.color-picker {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.color-option {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  transition: transform 0.2s;
}
.color-option:hover {
  transform: scale(1.1);
}
.preview-box {
  width: 250px;
  height: 100px;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 100px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>
