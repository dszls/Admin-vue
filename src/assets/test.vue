<template lang="html">
<div>
  <el-button @click="alerts">alert</el-button>
  <el-button @click="confirm1">confirm1</el-button>
  <el-button @click="setLimit">设置部分权限</el-button>
  <el-button @click="setLimitAll">设置全部权限</el-button>
  <el-button @click="removeLimitAll">删除权限</el-button>
  <div class="">
    <app-confirm
      :visible="confirmShow"
      :msg="confirmInfo.msg"
      :type="confirmInfo.type"
      @handleClose="hideConfirm"
      @makeSure="makeSure"
    ></app-confirm>
  </div>

  <div class="">
    权限 ：{{permission}}
          <span v-for="item in permission "  style="margin-right:20px;">{{item}}</span>
  </div>
  <p>标签页切换</p>
  <app-tabs
    @tabClick="tabs"
  ></app-tabs>
</div>
</template>

<script>
import appTabs from 'components/appTabs.vue'
export default {
  name:'test',
  components:{
    'app-tabs':appTabs
  },
  data(){
    return{
      confirmShow:false,
      confirmInfo:{
        type:'',
        msg:''
      }
    }
  },
  computed:{
    permission:function(){
      var arr=null
      console.log(this.$localStore.get('permission'),typeof this.$localStore.get('permission'));
      if( !this.$store.getters.permission ){ //先设置
          this.$store.commit('setPermission',JSON.parse(this.$localStore.get('permission')))
      }
      return this.$store.getters.permission
    }
  },
  mounted(){

  },
  methods:{
    alerts(){
      // this.$store.dispatch('ShowAlert',{
      //   type:'warning',
      //   title:'嘎嘎嘎'
      // })

      this.$store.dispatch('ShowAlert','传个字符串')

    },
    confirm1(){
      this.confirmShow=true
      this.confirmInfo.type="warning"
      this.confirmInfo.msg="你确定执行该操作吗？"

    },
    hideConfirm(val){//关闭confirm
      this.confirmShow=val
    },
    makeSure(){
      alert(1)
    },
    setLimit(){
      //设置权限
      var arr=["customers","limits","settings","users"]
      this.$store.commit('setPermission',arr)
      console.log(this.$store.getters.permission);
    },
    setLimitAll(){
      var arr=["houses","customers","users","operates","limits","settings"]
      this.$store.commit('setPermission',arr)
    },
    removeLimitAll(){
      var arr=null
      this.$store.commit('setPermission',arr)

    },
    tabs(i){
      console.log(i);
    }
  }
}
</script>

<style lang="css">
</style>
