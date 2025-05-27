<script setup lang="ts">
import Navbar from './Navbar.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Skills from './Skills.vue'
import About from './About.vue'

import Project from './Project.vue'

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const fullText = 'Front-End Developer'
const typedText = ref('')
let index = 0
const isDarkMode = ref(false);

const typeWriter = () => {
  if (index < fullText.length) {
    typedText.value += fullText.charAt(index)
    index++
  } else {
    // عندما ينتهي النص، نعيد التعيين لإعادة الكتابة من البداية
    setTimeout(() => {
      typedText.value = '' // إعادة النص الفارغ
      index = 0 // إعادة الفهرس إلى البداية
      typeWriter() // بدء الكتابة من جديد
    }, 1000) // تأخير قبل أن تبدأ الكتابة من جديد (1 ثانية هنا)
    return
  }
  setTimeout(typeWriter, 100) // الكتابة بحرف واحد في المرة
}
onMounted(() => {
  typeWriter()
  window.addEventListener('scroll', handleScroll);


})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
function openPDF() {
  window.open('../../public/Rahaf douiar.pdf', '_blank');
}

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="white-text">
    <Navbar></Navbar>
    <div class="container">
      <section class="d-flex flex-wrap align-items-center" style="height: 100vh">
        <!-- First Section with Text -->
        <div class="first-section" data-aos="fade-right">
          <h3 data-aos="fade-right" class="text-hello">
            Hello , My name is <span class="text-heading">Rahaf Douair</span>
          </h3>
          <!-- <h6 >I'm a  <span>Front-End Developer</span> </h6> -->
          <h4>
            I'm a <span class="text-heading">{{ typedText }}</span>
          </h4>
          <a class="btn btn-download my-4" @click="openPDF" target="_blank">Download Cv</a>

          <!-- <button @click="openPDF">Open PDF</button> -->

        </div>

        <!-- <div data-aos="fade-up"
     data-aos-duration="3000">
</div>
<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
</div> -->

        <!-- Second Section with Image -->
        <div class="section mx-2" data-aos="fade-left">
          <h2>
            <img class="rounded-img" src="../assets/img-main.jpg" alt="" />
          </h2>
        </div>
      </section>
    <Skills></Skills>
    <About></About>
    <Project></Project>
    <button
 :class="{ 'back-to-top': true, show: showButton }"
  @click="scrollToTop"
>
  ↑
</button>
    </div>
  </div>
</template>

<style></style>
