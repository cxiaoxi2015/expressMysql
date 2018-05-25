import Vue from 'vue'
import App from './App'
// vue-router
import router from './router'
// iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// axios
import axios from 'axios'
Vue.use(iView)
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
