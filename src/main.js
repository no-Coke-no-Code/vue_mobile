// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from "./store/index.js";
import "@/assets/reset.css";
import "@/assets/border.css"
import "@/assets/icon.scss";
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
