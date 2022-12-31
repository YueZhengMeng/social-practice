<template>
  <td>
    <div class="btn-group" role="group">
      <button v-if="joined === 0 && allowedOperations?.join && state === 0" class="btn btn-success" type="button"
              @click="joinHandler">
        作为新小组加入
      </button>
      <button v-else-if="joined === 1 && allowedOperations?.join" class="btn btn-success disabled" type="button">
        已加入
      </button>
      <button v-if="allowedOperations?.remove && privileged" class="btn btn-danger" type="button"
              @click="deleteHandler">
        删除
      </button>
      <button v-if="state === 0 && allowedOperations?.end && priviligeGuarded"
              class="btn btn-dark" type="button"
              @click="endHandler">
        完成/结束
      </button>
      <button v-else-if="state === 1 && allowedOperations?.end"
              class="btn btn-dark disabled" type="button">
        已结束
      </button>
    </div>
  </td>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'OperationButtons',
  props: {
    state: {
      type: Number,
      required: true
    },
    joined: {
      type: Number,
      required: true
    },
    allowedOperations: {
      type: Object,
      required: true
    },
    privileged: {
      type: Boolean,
      required: true
    },
    requirePrivilege: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    priviligeGuarded() {
      return !this.requirePrivilege || this.privileged
    }
  },
  methods: {
    deleteHandler() {
      this.$emit('delete')
    },
    endHandler() {
      this.$emit('end')
    },
    joinHandler() {
      this.$emit('join')
    },
  }
})
</script>

<style scoped>

</style>
