import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 全量使用
// import 'element-ui/lib/theme-chalk/index.css';
// import Element from 'element-ui';
// Vue.use(Element);

// 按需使用
import { Button } from 'element-ui';
Vue.use(Button);

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

console.log(vm);
