import { createApp } from 'vue';
import App from './App.vue';
import naive from 'naive-ui'
import router from "./router"
import store from "./stores"
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'


const app = createApp(App)
  .use(naive)
  .use(router)
  .mount('#app');

