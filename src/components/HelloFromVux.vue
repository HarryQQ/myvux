<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1></h1>
    </div>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
    </group>
    <checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
      <checker-item value="1">{{ '男'}}</checker-item>
      <checker-item value="2">{{ '女'}}</checker-item>
    </checker>
    <div>{{demo1}}</div>
  </div>
</template>

<script>
  import {Group, Cell, Checker, Checklist, CheckerItem} from 'vux'

  export default {
    components: {
      Group,
      Cell,
      Checker,
      Checklist,
      CheckerItem
    },
    data () {
      return {
        demo1: '1',
        msg: 'Hello World!'
      }
    }
  }
</script>

<style>
  .demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
  }
  .demo1-item-selected {
    border: 1px solid green;
  }
  .vux-demo {
    text-align: center;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
