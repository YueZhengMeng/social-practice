<template>
  <table class="table">
    <thead>
    <tr>
      <th>学号/工号</th>
      <th>用户名</th>
      <th>身份</th>
<!--      <th>操作</th>-->
    </tr>
    <UserTableRow
        v-for="user in users"
        :user="user"
        :key="user.userID"
    />
<!--    <AppendRow @append="addActivityHandler" />-->
    </thead>
  </table>
</template>

<script>
import {defineComponent} from 'vue'
import UserTableRow from '@/components/UserTableRow'
import {getUserInGroup} from '@/services/user'
// import AppendRow from '@/components/AppendRow'

export default defineComponent({
  name: 'UserTable',
  components: {
    UserTableRow
    // AppendRow
  },
  props: {
    groupId: Number
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    refresh() {
      this.users = []
      getUserInGroup(this.groupId)
          .then(res => {
            this.users = res.data
          })
          .catch(err => {
            console.log(err)
          })
    }
    // addActivityHandler(activity) {
    //   this.$emit('add', activity)
    // }
  },
  mounted() {
    getUserInGroup(this.groupId)
        .then(res => {
          this.users = res.data
        })
        .catch(err => {
          console.log(err)
        })
  }
})
</script>

<style scoped>

</style>
