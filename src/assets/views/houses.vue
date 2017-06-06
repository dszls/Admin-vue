<template lang="html">
<div id="houses-page">
  <app-tabs
    :tab-list="tabList"
    @tabClick="tabs"
  ></app-tabs>


</div>
</template>

<script>
import appTabs from 'components/appTabs.vue'
export default {
  name:'houses',
  components:{
    'app-tabs':appTabs
  },
  data(){
    return{
      tabList:[
        {
          name:'园区管理'
        },
        {
          name:'楼宇管理'
        },
        {
          name:'房源管理'
        }
      ]
    }
  },
  computed:{

  },
  mounted(){

  },
  methods:{
    tabs(i){
      console.log(i);
    },
  }
}
</script>

<style lang="css">
</style>
