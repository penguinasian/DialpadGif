import { createApp } from 'vue'
import App from './App.vue'



createApp(App).mount('#app')


const data = {
    path: 'init',
    client_uid: window.name,
  }
  window.sendMessage(data, 'https://dialpadbeta.com')
