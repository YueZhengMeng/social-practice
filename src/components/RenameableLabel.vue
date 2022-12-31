<template>
  <td v-if="!renaming"
      @click="renamePractice"
      data-bs-toggle="collapse"
      :data-bs-target="this.enabled ? '' : dataBsTarget">
    {{ name }}
  </td>
  <td v-else>
    <input type="text" v-model="newName" :placeholder="placeholder" />
    <div class="btn-group" role="group">
      <button class="btn btn-success btn-sm"
              @click="submitRename">
        确定
      </button>
      <button class="btn btn-secondary btn-sm"
              @click="cancelRename">
        取消
      </button>
    </div>
  </td>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'RenameableLabel',
  props: {
    enabled: {
      type: Boolean,
      required: true
    },
    name: String,
    placeholder: {
      type: String,
      default: '输入新的名称...'
    },
    dataBsTarget: String
  },
  data() {
    return {
      renaming: false,
      newName: ''
    }
  },
  methods: {
    renamePractice() {
      if (!this.enabled) return

      this.newName = ''
      this.renaming = true
    },
    cancelRename() {
      this.newName = ''
      this.renaming = false
    },
    submitRename() {
      this.$emit('rename', this.newName)
      this.cancelRename()
    }
  }
})
</script>

<style scoped>

</style>
