<template>
  <tr>
    <td data-bs-toggle="collapse" :data-bs-target="`#${bsTarget}`">
      {{ activity.activityID }}
    </td>
    <RenameableLabel
        :name="activity.activityName"
        :data-bs-target="`#${bsTarget}`"
        @rename="submitRename"
        :privileged="privileged"
        :enabled="allowedOperations?.rename"
    />
    <td data-bs-toggle="collapse" :data-bs-target="`#${bsTarget}`">
      {{ activity.startTime }}
    </td>
    <td data-bs-toggle="collapse" :data-bs-target="`#${bsTarget}`">
      {{ activity.endTime }}
    </td>
    <td data-bs-toggle="collapse" :data-bs-target="`#${bsTarget}`">
      {{ activityStateToString }}
    </td>
    <OperationButtons
        :state="this.activity.state"
        :joined="-1"
        @delete="deleteActivity"
        @end="endActivity"
        :allowed-operations="allowedOperations"
        :privileged="privileged"
        :require-privilege="false"
    />
  </tr>
</template>

<script>
import RenameableLabel from '@/components/RenameableLabel'
import {deleteActivity, endActivity, renameActivity} from '@/services/activity'
import OperationButtons from '@/components/OperationButtons'
export default {
  name: 'ActivityTableRow',
  components: {OperationButtons, RenameableLabel},
  props: {
    activity: {
      type: Object,
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
  computed: {
    bsTarget() {
      return 'activity' + this.activity.activityID
    },
    activityEnded() {
      return this.activity.state === 1
    },
    activityStateToString() {
      if (this.activity.state === 0)
        return '正在进行'
      else if (this.activity.state === 1)
        return '已结束'
      else
        return this.activity.state
    },
  },
  methods: {
    submitRename(e) {
      // console.log(e)
      renameActivity(this.activity.activityID, e)
          .then(res => {
            console.log(res.data)
            this.$emit('rename')
          })
      // this.newName = ''
      // this.renaming = false
    },
    deleteActivity() {
      deleteActivity(this.activity.activityID)
          .then(() => {
            alert('删除成功')
            this.$emit('delete')
          })
          .catch(err => {
            alert('删除失败')
            console.log(err)
          })
    },
    endActivity() {
      endActivity(this.activity.activityID)
          .then(() => {
            alert('结束成功')
            this.$emit('delete')
          })
          .catch(err => {
            alert('结束失败')
            console.log(err)
          })
    }
  }
}
</script>

<style scoped>

</style>
