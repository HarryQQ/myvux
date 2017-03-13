<style lang="less" scoped>
  @import "style.less";
</style>
<template>
  <div class="login">
      <tab :line-width="4" >
        <tab-item  selected>登录</tab-item>
        <tab-item >注册</tab-item>
      </tab>
    <group label-width="4em">
      <x-input title="用户名" v-model="username"></x-input>
      <x-input title="密码" v-model="password"></x-input>
    </group>
    <x-button type="primary" @click.native="login" style="margin-top: 20px">登录</x-button>
  </div>
  </div>
</template>

<script>
  import {Scroller, XButton, XInput, Group, Icon, Tab, TabItem} from 'vux'
  import wilddog from 'wilddog'
  const APPID = 'yinkongjian'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    components: {
      Scroller,
      XButton,
      XInput,
      Group,
      Icon,
      Tab,
      TabItem
    },
    mouted () {
      console.log('this is login page')
    },
    methods: {
      wildDog () {
        const config = {
          syncURL: `https://${APPID}.wilddogio.com` // 输入节点 URL
        }
        wilddog.initializeApp(config)
        const ref = wilddog.sync().ref()
        ref.set({
          'user': {
            name: 'huan',
            id: '2',
            age: '22'
          }
        })
      },
      addData () {
        this.wildDog()
      }
    }
  }
</script>
