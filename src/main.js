import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from './router';
import Button from "primevue/button"
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
// eslint-disable-next-line vue/multi-word-component-names
app.component('Button',Button);
app.component('DataTable',DataTable);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Column',Column);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Dialog',Dialog);
// eslint-disable-next-line vue/multi-word-component-names
app.component('InputText',InputText);
app.mount('#app')

