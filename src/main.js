import Vue from 'vue'
import App from './App.vue'
import BoostrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './utils/firebase'
import {  rtdbPlugin } from 'vuefire'


Vue.use(BoostrapVue)
Vue.use( rtdbPlugin)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
