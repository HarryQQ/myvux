<style lang="less" scoped>
  @import "style.less";
</style>
<template>
  <div class="login">
    <tab :line-width="4">
      <tab-item selected @on-item-click="goLogin">登录</tab-item>
      <tab-item @on-item-click="goRegister">注册</tab-item>
    </tab>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
  import {Scroller, XButton, XInput, Group, Icon, Tab, TabItem} from 'vux'
  import wilddog from 'wilddog'
  const APPID = 'yinkongjian'
  export default {
    components: {
      Scroller,
      XButton,
      XInput,
      Group,
      Icon,
      Tab,
      TabItem
    },
    created () {
      console.log('route', this.$route)
    },
    methods: {
      goLogin () {
        this.$router.push('/login/signin')
      },
      goRegister () {
        this.$router.push('/login/register')
      },
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
