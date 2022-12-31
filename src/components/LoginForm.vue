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
              登录
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
import {getCurrentUser, login} from '@/services/user'
import instance from '@/services/instance'
export default defineComponent({
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitHandler(e: Event) {
      e.preventDefault()
      // console.log(this.$data.username)
      // console.log(this.$data.password)
      login(this.$data.username, this.$data.password)
          .then(res => {
            alert('登录成功')
            instance.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.jwtToken
            console.log(instance.defaults.headers.common['Authorization'])
            getCurrentUser().then(res => {
              console.log(res.data)
              console.log(res.data.username)
              console.log(res.data.role)
              this.$store.commit('user/set', {
                username: res.data.username,
                role: res.data.role
              })
              this.$router.push('/')
            })
          })
          .catch(err => {
            alert('登录失败')
            console.log(err)
      })
    }
  }
})
</script>

<style scoped>

</style>
