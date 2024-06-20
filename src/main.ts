import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'
import loading from "@/assets/avatarDefault.webp";

import VueAwesomePaginate from "vue-awesome-paginate";

import "vue-awesome-paginate/dist/style.css";
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueAwesomePaginate)
app.use(router)
app.use(VueLazyLoad, {
  loading,
  error: loading,
})
app.mount('#app')
