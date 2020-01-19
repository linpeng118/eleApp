<template>
  <div class="paddingTop">
    <head-top headTitle="会员中心"></head-top>
    vip
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/footGuide'
export default {
  data(){
    return{

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