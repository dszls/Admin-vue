import Vue from 'vue'
import VueRouter from 'vue-router'
import localStore from 'store'  //localstroge库
import store from './../store/index.js'
//加载路由中间件
Vue.use(VueRouter)

import Test from './../assets/test.vue'

import Login from './../assets/login.vue'
import LoginForm from './../assets/views/loginForm.vue'
import LogonForm from './../assets/views/logonForm.vue'

import Index from './../assets/index.vue'
import Houses from './../assets/views/houses.vue'
import Customers from './../assets/views/customers.vue'
import Users from './../assets/views/users.vue'
import Limits from './../assets/views/limits.vue'
import Operates from './../assets/views/operates.vue'
import Settings from './../assets/views/settings.vue'

const indexChildren=[
  {
    path:'houses',
    component:Houses,
    name:'houses',
  },
  {
    path:'customers',
    component:Customers,
    name:'customers',
  },
  {
    path:'users',
    component:Users,
    name:'users',
  },
  {
    path:'limits',
    component:Limits,
    name:'limits',
  },
  {
    path:'operates',
    component:Operates,
    name:'operates',
  },
  {
    path:'settings',
    component:Settings,
    name:'settings',
  }
]

const router=[
  {
    path:'/test',
    component:Test,
    name:'test'
  },
  {
    path:'/login',
    component:Login,
    name:'login',
    children:[
      {
        path:'',
        alias:'loginForm',
        component:LoginForm,
        name:'loginForm',
      },
      {
        path:'logonForm',
        component:LogonForm,
        name:'logonForm',
      }
    ]
  },
  {
    path:'/',
    component:Index,
    name:'index',
    //redirect:store.getters.permission[0],
    children:indexChildren
  },


]


//router.addRoutes(indexChildren)

export default router
