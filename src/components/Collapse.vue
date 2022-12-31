<template>
  <tr>
    <td colspan="6">
      <div class="collapse" :id="bsTarget">
        <div class="card card-body">
          <slot @refresh="refresh"></slot>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Collapse',
  // components: {ActivityTable},
  props: {
    bsTarget: String
  },
  methods: {
    refresh() {
      this.$emit('refresh')
    }
  }
  // computed: {
  //   bsTarget() {
  //     return 'practice' + this.practiceId
  //   },
  // }
})
</script>

<style scoped>
td {
  padding: 0;
}
</style>
