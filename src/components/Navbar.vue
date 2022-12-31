<template>
  <div class="row">
    <div class="col-md-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="navbar-toggler-icon"></span>
        </button> <a class="navbar-brand" @click="$router.push('/')">社会实践管理系统</a>
        <LoginButton />
      </nav>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import LoginButton from '@/components/LoginButton'

export default defineComponent({
  name: 'Navbar',
  components: {LoginButton}
})
</script>

<style scoped>

</style>
