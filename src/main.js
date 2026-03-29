/**
 * Point d'entrée de l'application Vue.js
 *
 * C'est ici que tout commence. Ce fichier fait 3 choses :
 * 1. Importe la fonction createApp de Vue 3 (le framework)
 * 2. Importe le composant racine App.vue (qui contient tout le layout)
 * 3. Importe les styles globaux (variables CSS, reset)
 *
 * createApp(App) crée une instance Vue à partir du composant App,
 * puis .mount('#app') l'attache au <div id="app"> dans index.html.
 *
 * C'est le pattern standard de toute app Vue 3 avec Vite.
 */
import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'

createApp(App).mount('#app')
