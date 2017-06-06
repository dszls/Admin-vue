import 'animate.css'
import 'babel-polyfill' //vuex在IE9会报错  兼容包
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import routeConfig from './route/router.js'
import fns from './logicFn.js'
import localStore from 'store'  //localstroge库
//import Moment from 'moment'

import store from './store'//vuex
import Alert from './assets/globals/Alert'
import Confirm from './assets/globals/confirm'
Vue.use(Alert);
Vue.use(Confirm);

Vue.use(ElementUI)

//Vue.prototype.$moment = Moment //时间处理函数
Vue.prototype.$fns = fns  //引入封装的函数
Vue.prototype.$localStore = localStore  //localstroge库

const router = new VueRouter({
  routes: routeConfig
})

router.beforeEach((to,from,next)=>{
  console.log(to);
  var isLogin=false
  for (var i = 0; i < to.matched.length; i++) {
    console.log('路由记录',to.matched[i])
    var matched=to.matched[i]

    if( matched.name=='login'){//登录页
      isLogin=true
      break
    }
    if( matched.name=='test'){//测试页
      break
    }
    

    if( i==1  ){//index二级路由（左侧一级菜单）
      store.commit('setActiveLevel1',matched.name)
    }

    // if(   ){
    //
    // }

  }

  if(isLogin){//登录页

  }else{


  }
  next()
})

















new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
