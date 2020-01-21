<template>
  <div class="red_envelope">
    <head-top head-title="会员红包" goBack="true"></head-top>
    红包
  </div>
</template>

<script>
import headTop from 'src/components/header/head'
export default {
  data(){
    return{

    }
  },
  components:{
    headTop
  }
}
</script>

<style lang="scss" scoped>
  .red_envelope{
    padding-top:1.95rem;
  }
</style>