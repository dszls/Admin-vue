<template lang="html">
<div id="index-content-right">

  <div class="index-content-right-header">
    <div class="fl">

      <div class="full-screen"  @click="changeScreen">
        <i :class="['iconfont', isFullScreen ? 'icon-tuichuquanping':'icon-fullscreen']"></i>
      </div>

      <div class="date-now">
        <i class="iconfont icon-ic_schedule_px"></i>
        <span>{{dateNow}}</span>
        <span>{{weekNow}}</span>
      </div>

    </div>
    <div class="fr">
      <img :src="userInfo.head" alt="">
      <span class="name">Hello,{{userInfo.name}}</span>
      <span class="quit"  @click="quit">
        <i class="iconfont icon-guanji"></i>
      </span>
    </div>
  </div>
  <div class="page-views ">

    <router-view class="page-view"></router-view>

  </div>

  <app-confirm
    :visible="confirmShow"
    :msg="confirmInfo.msg"

    @handleClose="hideConfirm"
    @makeSure="makeSure"
  ></app-confirm>
</div>
</template>

<script>
var noHead=require('imgs/User-head.png')
export default {
  name:'indexContent',
  components:{

  },
  data(){
    return{
      userInfo:{
        head:noHead,
        name:'周杰伦',
      },
      confirmShow:false,
      confirmInfo:{
        msg:'你确定要退出吗？'
      },
      isFullScreen:false,
      dateNow:moment().format('LL'),
      weekNow:moment().format('dddd'),
    }
  },
  computed:{

  },
  mounted(){
    this.listenScreen()
    //console.log(this.$moment.locale('cn'));
  },
  methods:{
    hideConfirm(val){
      this.confirmShow=false
    },
    makeSure(){
      this.confirmShow=false
      //清除localstroge
      this.$router.push({
        name:'login'
      })
    },
    quit(){
      this.confirmShow=true
    },
    changeScreen() {
      var vm = this;

      if (vm.isFullScreen) {
        vm.exitFullscreen()
      } else {
        vm.fullscreen()
      }

      vm.isFullScreen = !vm.isFullScreen
    },
    fullscreen() {
      var docElm = document.documentElement;
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    },
    listenScreen() { //监听全屏
      var vm = this
      document.addEventListener('fullscreenchange',
        function() {
          vm.isFullScreen = document.fullscreen;
        },
        false);
      document.addEventListener('mozfullscreenchange',
        function() {
          vm.isFullScreen = document.mozFullScreen
        },
        false);
      document.addEventListener('webkitfullscreenchange',
        function() {
          vm.isFullScreen = document.webkitIsFullScreen

        },
        false);
      document.addEventListener('msfullscreenchange',
        function() {
          vm.isFullScreen = document.msFullscreenElement
        },
        false);

    },
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    },
  }
}
</script>

<style lang="css">
</style>
