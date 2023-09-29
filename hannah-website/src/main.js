import { createApp } from 'vue';
import App from './App.vue';
import router from '../routes/router.js';
import { Transition } from 'vue';

import '@/stylesheets/styles.css';

const app = createApp(App);


app.use(router);
app.mount('#app');



