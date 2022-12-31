<template>
  <tr>
    <td></td>
    <td>
      <input type="text" :placeholder="placeholder" class="form-control" v-model="currentInput.name" />
    </td>
    <td>
    </td>
    <td>
    </td>
    <td>
    </td>
    <td>
      <button class="btn btn-primary"
              @click="internalAppendHandler">
        添加
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'AppendRow',
  props: {
    placeholder: {
      type: String,
      default: '请输入...'
    }
  },
  data() {
    return {
      currentInput: {
        name: '',
      }
    }
  },
  methods: {
    internalAppendHandler() {
      this.$emit('append', this.currentInput.name)
      this.currentInput.name = ''
    }
  }
}
</script>

<style scoped>

</style>
