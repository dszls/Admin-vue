<template>
<div class="window_mask"  v-show="isShow">

  <div class="  myCenterUp  window_mask_content" >
    <i class="el-icon-close"  @click="removeComfirm"></i>
    <div class=" window_mask_content_img">
      <i :class="['iconfont',typeImg]"></i>
    </div>
    <p class=" window_mask_content_msg">
      {{msg}}
    </p>

    <div class=" window_mask_content_btns">
      <el-button   @click="removeComfirm">取 消</el-button>
      <el-button type="primary"  @click="okClick">确 定</el-button>
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
  name: 'appConfirm',
  components:{

  },
  props:{ //作为组件的传参
    type:{
      type: String,
      default: 'warning'
    },
    msg:{
      type: String,
      default: '你确定执行该操作吗？'
    },
    visible:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      //okFn:null

    };
  },
  computed:{ //计算属性
    typeImg(){
      return  typeArr[this.type]
    },

    isShow(){
      return this.visible
    },


  },
  filters:{ //字段过滤器

  },
  created(){
  },
  mounted(){ //  nextTick前加美元符号

  },
  methods:{
    removeComfirm(){

      this.$emit('handleClose',false)
    },
    okClick(){
      this.$emit('makeSure')
      this.$emit('handleClose',false)
    },
  }
};
</script>
<style lang="css" scoped>
</style>
