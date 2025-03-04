import './services/request'

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'

import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Tooltip from 'primevue/tooltip';
import BadgeDirective from 'primevue/badgedirective';
import ToastService from 'primevue/toastservice';

import App from './App.vue'
import router from './router/router'

const app = createApp(App);
app.use(router)
app.use(PrimeVue, {
	theme: {
		preset: Aura
	},
	ripple: true,
});
app.directive('badge', BadgeDirective);
app.directive('tooltip', Tooltip);
app.use(ToastService);
app.use(createPinia())

app.mount('#app')
