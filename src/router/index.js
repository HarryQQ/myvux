import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/HelloFromVux.vue'
import Login from '../views/login/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
