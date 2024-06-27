import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import IndexJS from './assets/js/index.js'
import CSS from './assets/css/styles.css'

createApp(App).use(router).use(IndexJS).use(CSS).mount('#app')