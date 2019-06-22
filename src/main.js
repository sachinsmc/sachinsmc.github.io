import Vue from 'vue';
import Buefy from 'buefy';
import vueHeadful from 'vue-headful';

import 'buefy/dist/buefy.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.component('vue-headful', vueHeadful);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
