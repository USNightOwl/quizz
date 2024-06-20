import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'
import loading from "@/assets/avatarDefault.webp";

const app = createApp(App)

app.use(router)
app.use(VueLazyLoad, {
  loading,
  error: loading,
})
app.mount('#app')
