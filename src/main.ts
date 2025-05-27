import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
const app = createApp(App)

AOS.init({
  duration: 1000,
  once: true,
})

router.afterEach(() => {
  AOS.refresh()
})
app.mixin({
  mounted() {
    window.scrollTo(0, 0);
  }
});

app.use(router)

app.mount('#app')
