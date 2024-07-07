import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

createApp(App)
.use(router)
.mount('#app')

if ('serviceWorker' in navigator && window.location.hostname !== "localhost") {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}