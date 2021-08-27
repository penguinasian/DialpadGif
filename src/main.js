import { createApp } from 'vue'
import App from './App.vue'



createApp(App).mount('#app')


const data = {
    path: 'init',
    client_uid: window.name,
  }
  window.postMessage(data, 'https://dialpadbeta.com')
