import { createApp } from 'vue'
import App from './App.vue'

const data = {
    path: 'init',
    client_uid: window.name,
  }
  window.sendMessage(data, 'https://dialpadbeta.com')

createApp(App).mount('#app')
