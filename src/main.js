import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VueYandexMetrika from 'vue-yandex-metrika'  

// import "bootstrap/dist/css/bootstrap.css";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueYandexMetrika, {
  id: 55456729,
  env: process.env.NODE_ENV
  // other options
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
