import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/HelloFromVux.vue'
import Login from '../views/login/index.vue'
import Signin from '../views/login/login.vue'
import register from '../views/login/register.vue'

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
      component: Login,
      children: [
        {path: '/login/signin', component: Signin, name: 'signin'},
        {path: '/login/register', component: register, name: 'register'}

      ]
    }
  ]
})
