import Vue from 'vue';
import App from './App.vue';
import VModal from 'vue-js-modal';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

new Vue({
  render: function render(h) {
    return h(App);
  },

  router
}).$mount('#app');
