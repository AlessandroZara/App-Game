import Vue from 'vue'
import App from './App.vue'
import BoostrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './utils/firebase'
import {  rtdbPlugin } from 'vuefire'
import "vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css";
import VueCookieAcceptDecline from "vue-cookie-accept-decline";



Vue.use(BoostrapVue)
Vue.use( rtdbPlugin)
Vue.component("vue-cookie-accept-decline", VueCookieAcceptDecline);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
