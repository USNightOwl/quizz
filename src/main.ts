import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'
import loading from "@/assets/avatarDefault.webp";

import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyLoad, {
  loading,
  error: loading,
})
app.mount('#app')
