<template>
  <tr>
    <td>{{ user.userID }}</td>
    <td>{{ user.username }}</td>
    <td>{{ readableRole }}</td>
  </tr>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'UserTableRow',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    readableRole(): string {
      if (this.user.role === 'teacher')
        return '教师'
      else if (this.user.role === 'student')
        return '学生'

      return this.user.role
    }
  }
})
</script>

<style scoped>

</style>
