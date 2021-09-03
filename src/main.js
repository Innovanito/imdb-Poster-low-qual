import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) //$route, $router can be used
  .use(store) // $store can be used
  .use(loadImage) //$loadImage can be used
  .mount('#app')