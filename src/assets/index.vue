<template lang="html">
<div id="index-page-body">
  <index-tab-left></index-tab-left>
  <index-content></index-content>
  <div class="index-page-foot">
    <div class="fl">
      <span>©️ 2016 - 2017 </span>
      <a href="http://www.ishangban.cn/" target="_blank">斑马</a>
    </div>
    <div class="fr">
      Developed by 杭州知坤网络科技有限公司
    </div>
  </div>
</div>
</template>

<script>
import indexTabLeft from 'components/indexTab.vue'
import indexContent from 'components/indexContent.vue'
export default {
  name: 'index',
  components: {
    'index-tab-left': indexTabLeft,
    'index-content': indexContent
  },
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="sass">

</style>
