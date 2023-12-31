import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';


axios.defaults.baseURL = '/';
//Анимация
import AosVue from "aos-vue";
createApp(App).use(AosVue).use(VueAxios, axios).use(store).use(router).mount('#app')
