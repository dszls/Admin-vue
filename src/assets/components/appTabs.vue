<template lang="html">
<div class="app-tabs-componet">
  <ul class="app-tabs-componet_ul clearfix">
    <li class="app-tabs-componet_li"  v-for="(item , i) in tabList"  :style="liStyle">
      <span
        :class="i==activeIndex ? 'active':''"
        @click="changeActive(i,$event)"
        >{{item.name}}</span>
    </li>
  </ul>

  <div class="app-tabs-componet_bar">

  </div>
</div>
</template>

<script>
var tabList=[
  {
    name:'标签1'
  },
  {
    name:'标签2'
  },
  {
    name:'标签3鼎折覆餗'
  }

]
export default {
  name:'appTabs',
  components:{

  },
  props:{
    tabList:{
      type:Array,
      default:function(){
        return tabList
      }
    },
    liPaddingRight:{
      type:Number,
      default:60
    },


  },
  data(){
    return{
      itemWidth:10,
      activeIndex:0,
    }
  },
  computed:{
    barStyle(){

    },
    liStyle(){
      return {
        'padding-right':this.liPaddingRight+'px'
      }
    },
  },
  mounted(){
    this.$nextTick(function(){
      var $p=this.$el

      var actived=$($p).find('span.active')
      console.log(actived,actived.width());

      var bars = $($p).find('.app-tabs-componet_bar')

      bars.width(actived.width())

    })
  },
  methods:{
    changeActive(i,e){
      var vm=this
      this.activeIndex=i

      var e=e || window.event
      e=e.target

      console.log(e);
      var $el=$(vm.$el)
      var bars=$el.find('.app-tabs-componet_bar')
      e=$(e).width()
      var lf=0
      for(let j=0 ; j<i ; j++){
        console.log($el.find('li').eq(j));
        lf+=$el.find('li').eq(j).outerWidth()

      }
      console.log(lf);

      bars.animate({
        'left':lf+'px',
        'width':e+'px'
      })

      this.$emit('tabClick',i)
    }
  }
}
</script>

<style lang="css">
</style>
