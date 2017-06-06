<template lang="html">
<div class="loginForm form-warp">
  <el-form :model="form" :rules="rules" ref="form" label-width="0" >
    <p class="title">登录</p>
    <el-form-item label="" prop="phone">
      <el-input v-model="form.phone"
        @focus="focusInput"
        @blur="blurInput"
        size="large" placeholder="姓名/手机号"></el-input>
      <i class="iconfont icon-yonghu"></i>
    </el-form-item>

    <el-form-item label="" prop="password">
      <el-input v-model="form.password" type="password" size="large"
        @focus="focusInput"
        @blur="blurInput"
      placeholder="密码"></el-input>
      <i class="iconfont icon-iconfontlock"></i>
    </el-form-item>

    <div class="ope" style="height:30px;padding-bottom:16px;">
      <el-checkbox v-model="isRemember" class="fl" style="padding:8px 0;">记住我</el-checkbox>
      <el-button type="text" class="fr"  @click="toForget">忘记密码？</el-button>
    </div>

    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="submit('form')">登 录</el-button>
    </el-form-item>
  </el-form>

</div>
</template>

<script>
export default {
  name:'loginForm',
  components:{

  },
  data(){
    return{
      isRemember:false,
      form:{
        phone:'15303989789',
        password:'111111111'
      },
      rules:{
        phone:[
          {
            required: true, message: '请输入手机号', trigger: 'blur'
          },
          {
            validator: this.$fns.validator.tel, trigger: 'blur'
          }
        ],
        password:[
          {
            required: true, message: '请输入密码', trigger: 'blur'
          },
          {
            validator: this.$fns.validator.psw, trigger: 'blur'
          },
          {
            min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur'
          }
        ]
      },
    }
  },
  computed:{

  },
  mounted(){

  },
  methods:{
    submit(val){
      var vm=this

      vm.$refs[val].validate((valid)=>{
        if(valid){
          var arr=["houses","customers","users","operates","limits","settings"]
          this.$store.commit('setPermission',arr)
          this.$router.push({
            name:'index'
          })
        }
      })

    },
    toForget(){
      this.$router.push({
        name:'logonForm'
      })
    },
    focusInput(event){

      var e=event|| window.event
      var inp=$(e.target).parents('.el-input').siblings('i')
      inp.addClass('active')
    },
    blurInput(event){
      var e=event|| window.event
      var inp=$(e.target).parents('.el-input').siblings('i')
      inp.removeClass('active')
    }
  }
}
</script>

<style lang="css">
</style>
