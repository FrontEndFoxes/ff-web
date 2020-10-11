import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n'
// To Get i18n values
import { valuesI18n } from "./i18n";
// createI18n: pass the values
const i18n = createI18n(valuesI18n)

// Create the app
const app = createApp(App);

// Add uses
app.use(router);
app.use(i18n);

// Mounted
app.mount('#app');