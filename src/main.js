import {createApp} from 'vue';
import App from './App.vue';
import router from '../routes/router.js';
import {createI18n} from 'vue-i18n';
import en from './languages/en.json'
import de from './languages/de.json'
import '@/stylesheets/styles.css';

const i18n = createI18n({
    locale: 'en',
    messages: {
        en,
        de,
    },
});

const app = createApp(App);

app.config.globalProperties.$root = app;
app.provide('currentLanguage', app.config.globalProperties.currentLanguage);
app.use(i18n);

app.use(router);
app.mount('#app');



