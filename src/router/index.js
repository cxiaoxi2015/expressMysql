import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
