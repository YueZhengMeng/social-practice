<template>
  <div class="row">
    <div class="col-md-12">
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li class="breadcrumb-item active">
            Data
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'breadcrumb',
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    pathComponents(): string[] {
      return this.path.split('/')
    }
  }
})
</script>

<style scoped>

</style>
