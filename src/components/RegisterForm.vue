<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form role="form" @submit="submitHandler">
          <div class="form-group">
            <label for="exampleInputEmail1">
              用户名
            </label>
            <input type="text" class="form-control" id="exampleInputEmail1" v-model="username" />
          </div>
          <div class="form-group">

            <label for="exampleInputPassword1">
              密码
            </label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" />
          </div>
          <div class="form-group">

            <label for="exampleInputPassword2">
              确认密码
            </label>
            <input type="password" class="form-control" :class="{'border-danger': (password !== confirmPassword)}" id="exampleInputPassword2" v-model="confirmPassword" />
          </div>
<!--          <div class="form-group">-->

<!--            <p class="help-block">-->
<!--              Example block-level help text here.-->
<!--            </p>-->
<!--          </div>-->
<!--          <div class="checkbox">-->

<!--            <label>-->
<!--              <input type="checkbox" /> Check me out-->
<!--            </label>-->
<!--          </div>-->
          <div class="form-group pt-3">
<!--            <button class="btn btn-primary" @click="$router.push('/')">back</button>-->
            <button type="submit" class="btn btn-primary">
              注册
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {getCurrentUser, login, register} from '@/services/user'
import instance from '@/services/instance'
export default defineComponent({
  name: 'RegisterForm',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    async submitHandler(e: Event) {
      e.preventDefault()
      if (this.password !== this.confirmPassword) {
        alert('两次输入的密码不一致')
        return
      }
      // console.log(this.$data.username)
      // console.log(this.$data.password)
      try {
        const res = await register(this.$data.username, this.$data.password)
        if (res.status === 201) {
          const loginRes = await login(this.$data.username, this.$data.password)
          instance.defaults.headers.common['Authorization'] = 'Bearer ' + loginRes.data.jwtToken
          alert('注册成功')
          await this.$router.push('/')
        } else {
          console.log(res)
          console.log(e)
          alert('注册失败')
        }
      } catch (e) {
        alert('注册失败')
        console.log(e)
      }
      //     .then(res => {
      //       alert('登录成功')
      //       instance.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.jwtToken
      //       console.log(instance.defaults.headers.common['Authorization'])
      //       getCurrentUser().then(res => {
      //         console.log(res.data)
      //         console.log(res.data.username)
      //         console.log(res.data.role)
      //       })
      //     })
      //     .catch(err => {
      //       alert('登录失败')
      //       console.log(err)
      // })
    }
  }
})
</script>

<style scoped>

</style>
