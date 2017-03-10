<style lang="less" scoped>
  @import "style.less";
</style>
<template>
  <div class="login">
    <div class="login-table"></div>
  </div>
</template>

<script>
  import {Scroller} from 'vux'
  export default {
    data () {
      return {
        msg: 'hello'
      }
    },
    components: {
      Scroller
    }
  }
</script>
