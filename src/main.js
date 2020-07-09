import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css';
import axios from 'axios'
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem('token') && localStorage.getItem('userId')) {
      return next()
    } else {
      router.replace('/login')
    }
  }
  return next()
})
import { Toast } from 'vant';
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.interceptors.request.use(config => {
  if (localStorage.getItem('token') && !config.headers.Authorization) {
    config.headers.Authorization = "Bearer " + localStorage.getItem('token')
  }
  return config
})
axios.interceptors.response.use(res => {
  const { statusCode, message } = res.data
  if (statusCode == 401 && message == '用户信息验证失败') {
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
    Toast.fail(message)
    router.push('/login')
  }
  return res
})
Vue.filter('addBaseURL', url => {
  const reg = new RegExp(/^http/);
  if (reg.test(url)) {
    return url
  } else {
    return axios.defaults.baseURL + url
  }
});
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
