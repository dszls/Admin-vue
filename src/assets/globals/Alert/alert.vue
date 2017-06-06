<template>
<div class=" window_mask  my_alert"  v-show="isShow">
  <div class="my_alert_content   myCenterUp  window_mask_content" >
    <div class="my_alert_content_img window_mask_content_img">
      <i :class="['iconfont',typeImg]"></i>
    </div>
    <p class="my_alert_content_title window_mask_content_msg">
      {{title}}
    </p>

    <div class="my_alert_content_btns window_mask_content_btns">
      <el-button type="primary"  @click="removeAlert">确 定</el-button>
    </div>
  </div>
</div>
</template>
<script>


const typeArr={
  'success':'icon-success',
  'warning':'icon-warn'
}

export default {
  name: 'appAlert',
  components:{

  },
  props:{ //作为组件的传参

  },
  data () {
    return {

    };
  },
  computed:{ //计算属性
    typeImg(){
      return  typeArr[this.type]
    },
    type(){
      return this.$store.state.alertInfo.type
    },
    isShow(){
      if( this.type=='' ){
        return false
      }else{
        return true
      }
    },
    title(){
      return this.$store.state.alertInfo.title
    }
  },
  filters:{ //字段过滤器

  },
  created(){
  },
  mounted(){ //  nextTick前加美元符号

  },
  methods:{
    removeAlert(){
      console.log(this)
      this.$store.commit('changeShowAlert',{
        type:''
      })
    },
  }
};
</script>
<style lang="sass" scoped>

</style>
