import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './action.js'
import localStore from 'store'  //localstroge库
Vue.use(Vuex)

const state={
  alertInfo:{
      type:'',
      title:''
  },
  confirmInfo:{
      type:'warning',
      title:'你确定要执行该操作吗？'
  },
  permission:null,//权限

  activeLevel1:'',//一级菜单active


}

const getters = {
   /* count:function(state){
        return state.count +=100;
    }*/
    permission:function(state){//权限映射
      var arr=state.permission
      return arr
    }
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
