<template>
  <div>
    <group label-width="4em">
      <x-input title="用户名" v-model="username"></x-input>
      <x-input title="密码" v-model="password"></x-input>
    </group>
    <x-button type="primary" @click.native="login" style="margin-top: 20px">登录</x-button>
  </div>
</template>

<script>
  import {XButton, XInput, Group} from 'vux'
  export default{
    components: {
      XButton, XInput, Group
    },
    data () {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>
