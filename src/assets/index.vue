<template lang="html">
<div id="index-page-body">
  <index-tab-left></index-tab-left>
  <index-content></index-content>
  <div class="index-page-foot">
    footer
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
