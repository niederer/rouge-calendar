import Vue from 'vue';
import App from './App.vue';
import VModal from 'vue-js-modal';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

new Vue({
  render: h => h(App),
}).$mount('#app');
