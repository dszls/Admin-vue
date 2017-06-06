<template lang="html">
<div class="index-page-tab">
  <div class="index-page-tab-header">
    logo
  </div>
  <div class="index-page-tab-menus">
    <ul class="tab-menus-main-ul">
      <li class="tab-menus-main-li"  v-for="(item ,index) in permissionMenus"  :class="activeLevel1==item.routeName? 'active':''"   @click="tabPage(index)">
        <i :class="['iconfont',item.icon]"></i>
        <span class="tab-name">{{item.name}}</span>
        <i class="iconfont icon-xiangyou1 fr"></i>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name:'indexTab',
  components:{

  },
  data(){
    return{
      Menus:[
        {
          icon:'icon-fangchan',
          name:'房产管理',
          routeName:'houses',
          sign:'houses', //后端列举的权限类型
        },
        {
          icon:'icon-kehu1',
          name:'客户管理',
          routeName:'customers',
          sign:'customers', //后端列举的权限类型
        },
        {
          icon:'icon-yonghu',
          name:'用户管理',
          routeName:'users',
          sign:'users', //后端列举的权限类型
        },
        {
          icon:'icon-weixiu',
          name:'权限设置',
          routeName:'limits',
          sign:'limits', //后端列举的权限类型
        },
        {
          icon:'icon-iconfontcolor47',
          name:'操作日志',
          routeName:'operates',
          sign:'operates', //后端列举的权限类型
        },
        {
          icon:'icon-gerenxinxi',
          name:'个人设置',
          routeName:'settings',
          sign:'settings', //后端列举的权限类型
        }

      ],
      MenusActiveIndex:0,
      permissionMenus:[], //用户权限
    }
  },
  computed:{
    permission:function(){ //获取权限
      console.log(this.$store.getters.permission,99,this.$localStore.get('permission'),typeof this.$localStore.get('permission'));
      if( !this.$store.getters.permission ){ //先设置
          this.$store.commit('setPermission',JSON.parse(this.$localStore.get('permission')))
      }
      return this.$store.getters.permission
    },
    activeLevel1:function(){
      return this.$store.state.activeLevel1
    },
  },
  mounted(){
    console.log(this.permission);
    var vm=this
    vm.permission.forEach(function(permission){
      vm.Menus.forEach(function(menu){
        if( permission==menu.sign ){
          vm.permissionMenus.push(menu)
        }
      })
    })
    //vm.initActive()
    //console.log(this.$route.name);
    if(vm.$route.name=='index'){
      vm.initActive()
    }
  },
  methods:{
    tabPage(i){
      console.log(i);
      this.MenusActiveIndex=i
      var name=this.permissionMenus[i].routeName
      this.$router.push({
        name:name
      })
    },
    initActive(){  //默认进入第一项
      var vm=this
      vm.$router.push({
        name:vm.permissionMenus[0].routeName
      })
    },

  }
}
</script>

<style lang="css">
</style>
