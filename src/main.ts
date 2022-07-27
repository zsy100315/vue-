import { createApp } from 'vue';
import App from './App.vue';
//引入router
import router from './router';
//引入store
import store from './store';

//引入axios;
import axios from 'axios';

//引入mock
import { mockXHR } from '@/mock/index';
mockXHR();

//全局引入ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store).use(router).use(Antd).mount('#app');
