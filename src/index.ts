import Vue from 'vue';
import App from './App.vue';
import router from './router';

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

console.log(vm);
