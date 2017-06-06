import * as types from './mutations-types.js'

var AlertTimer=null

export default {
  //alert 弹窗控制
  ShowAlert({ commit },obj){
      console.log(obj)

      var objC=null
      if(typeof obj=='string'){
        objC={
          type:'warning',
          title:obj
        }

      }else{
        objC=obj
      }
      commit('changeShowAlert',objC)
      /*state.alertInfo.type=obj.type;
      state.alertInfo.title=obj.title;*/
      if(objC.type!=''){
          console.log(111)
          if(AlertTimer){
              clearTimeout(AlertTimer)
          }
         AlertTimer= setTimeout(()=>{commit('hideAlert')},3000);
      }else{
          console.log(222)
          clearTimeout(AlertTimer)
      }

  },
  //alert 弹窗控制 end




}
