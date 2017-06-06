//vuex  突变时处理数据：

import * as types from './mutations-types.js'
import localStore from 'store'  //localstroge库
export default {
  //alert 弹窗控制
  changeShowAlert(state,obj){
      console.log(obj)
      state.alertInfo.type=obj.type;
      state.alertInfo.title=obj.title;
  },
  hideAlert(state){
      state.alertInfo.type=''
  },
  //alert end
  //confirm  对话框控制
  changeShowConfirm(state,obj){
      console.log(obj)
      state.confirmInfo.type=obj.type;
      state.confirmInfo.title=obj.title;
  },
  hideConfirm(state){
      state.confirmInfo.type=''
  },
  setPermission(state,arr){//权限设置
    state.permission=arr
    localStore.set('permission',JSON.stringify(state.permission))
  },
  //confirm  对话框控制 end
  //一级菜单active
  setActiveLevel1(state,activeName){
    state.activeLevel1=activeName
  },
  //一级菜单active end

}
