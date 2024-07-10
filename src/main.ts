import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import rippleDirective from './directives/v-ripple';
import './directives/ripple.css';
import initOfflineService from './services/offline.service';

createApp(App)
    .use(router)
    .directive('ripple', rippleDirective)
    .mount('#app');

initOfflineService()
