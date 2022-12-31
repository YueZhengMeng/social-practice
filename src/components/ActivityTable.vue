<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>进度编号</th>
        <th>进度名称</th>
        <th>开始时间</th>
        <th>结束时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      <ActivityTableRow
          v-for="activity in activities"
          :activity="activity"
          :key="activity.activityID"
          @delete="refresh"
          @rename="refresh"
          :privileged="privileged"
          :allowed-operations="allowedOperations"
      />
      <AppendRow v-if="!practiceEnded && allowedOperations.append && privileged" @append="addActivityHandler" placeholder="请输入新的进度名称..." />
    </thead>
  </table>
</template>

<script>
import {defineComponent, onBeforeMount} from 'vue'
import ActivityTableRow from '@/components/ActivityTableRow'
import {createActivity, getActivityByPracticeId} from '@/services/activity'
import {isLoggedIn} from '@/services/user'
import {useRouter} from 'vue-router'
import AppendRow from '@/components/AppendRow'

export default defineComponent({
  name: 'ActivityTable',
  components: {AppendRow, ActivityTableRow},
  props: {
    practiceId: {
      type: Number,
      required: true
    },
    practiceEnded: {
      type: Boolean,
      required: true
    },
    privileged: {
      type: Boolean,
      required: true
    },
    allowedOperations: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activities: [],
      // currentInput: {
      //   name: '',
      // }
    }
  },
  setup() {
    onBeforeMount(() => {
      if (!isLoggedIn())
        useRouter().push('/login')
    })
  },
  mounted() {
    getActivityByPracticeId(this.practiceId).then(res => {
      console.log(res.data)
      this.activities = res.data
      console.log('activities', this.activities)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    refresh() {
      getActivityByPracticeId(this.practiceId).then(res => {
        this.activities = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    addActivityHandler(e) {
      console.log(e, this.practiceId)
      createActivity(e, this.practiceId)
          .then(res => {
            console.log(res.data)
            if (res.data === 1) {
              getActivityByPracticeId(this.practiceId).then(res => {
                console.log(res.data)
                this.activities = res.data
              })
            }
          })
          .catch(err => {
            console.log(err)
          })

      // this.currentInput.name = ''
    }
  }
})
</script>

<style scoped>

</style>
