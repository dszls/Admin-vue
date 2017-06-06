<template>
  <div id="app" >
    <app-alert></app-alert>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/css/app.scss'
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },
  mounted(){

  },
  methods: {

  }
}
</script>

<style lang="sass"  >
body {
  font-family: Helvetica, sans-serif;
}
  $color:red;
//@import "./assets/css/app.scss";
</style>
