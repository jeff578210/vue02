import { createApp } from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router/index.js';
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');

