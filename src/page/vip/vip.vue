<template>
  <div class="paddingTop">
    <head-top :headTitle="titleVip"></head-top>
    vip
    <foot-guide :vipMessage="vipData"></foot-guide>
  </div>
</template>

<script>
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/footGuide'
export default {
  data(){
    return{
      vipData:5,
    }
  },
  computed:{
    titleVip(){
      return this.$t('language.vipCenter')
    }
  },
  components:{
    headTop,
    footGuide
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
</style>