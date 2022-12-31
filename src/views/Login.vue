<template>
  <LoginForm />
<!--  <breadcrumb />-->
</template>

<script>
import LoginForm from '@/components/LoginForm'
import {defineComponent} from 'vue'

export default defineComponent({
  practiceName: 'Login',
  components: {
    // Breadcrumb,
    LoginForm
  },
  mounted() {
    // this.$router.push('/')
  }
})
</script>

<style scoped>

</style>
