import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css';
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
