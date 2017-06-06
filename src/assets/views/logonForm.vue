<template lang="html">
<div class="logonForm form-warp">
  <el-form :model="form" :rules="rules" ref="form" label-width="0" >
    <p class="title">找回密码</p>
    <el-form-item label="" prop="phone">
      <el-input v-model="form.phone"
        @focus="focusInput"
        @blur="blurInput"
        size="large" placeholder="手机号"></el-input>
      <i class="iconfont icon-shouji"></i>
    </el-form-item>

    <el-form-item label="" prop="verify">
      <el-input v-model="form.verify"  size="large"
        @focus="focusInput"
        @blur="blurInput"
      placeholder="短信验证码"></el-input>
      <i class="iconfont icon-kaisuo"></i>
    </el-form-item>

    <el-form-item label="" prop="password">
      <el-input v-model="form.password" type="password" size="large"
        @focus="focusInput"
        @blur="blurInput"
      placeholder="输入新密码"></el-input>
      <i class="iconfont icon-iconfontlock"></i>
    </el-form-item>

    <el-form-item label="" prop="password1">
      <el-input v-model="form.password1" type="password" size="large"
        @focus="focusInput"
        @blur="blurInput"
      placeholder="再输入一遍新密码"></el-input>
      <i class="iconfont icon-iconfontlock"></i>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="submit('form')">提 交</el-button>
    </el-form-item>


  </el-form>
  <div class="">
    <el-button
      type="text"
      style="color:#898c91;"
      @click="back">
        <i class="iconfont icon-back"></i>
      返回登录页</el-button>
  </div>


</div>
</template>

<script>
export default {
  name:'logonForm',
  components:{

  },
  data(){
    var validate1 = (rule, value, callback) => {

          if ( value != this.form.password ) {
            callback(new Error('两次输入密码不一致!'));
          }else{
            callback();
          }

        }
    return{
      form:{
        phone:'',
        password:'',
        password1:'',
        verify:''
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
        ],
        password1:[
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            validator: validate1, trigger: 'blur'
          }
        ],
        verify:[
          {
            required: true, message: '请输入验证码', trigger: 'blur'
          },
          {
            min: 6, max: 6, message: '验证码为6位数字', trigger: 'blur'
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
    back(){
      this.$router.push({
        name:'loginForm'
      })
    },
    submit(val){
      var vm=this

      vm.$refs[val].validate((valid)=>{
        if(valid){
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
