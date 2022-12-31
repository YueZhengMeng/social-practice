<template>
  <a @click="$router.push(link)"
     class="list-group-item list-group-item-action"
     :class="{ active: isActive }">
    {{ name }} <span :class="isActive ? ['bg-light', 'text-dark'] : ['bg-primary']"
                     class="badge rounded-pill"
                     v-if="!!count">{{count}}</span>
  </a>
</template>

<script>
export default {
  name: 'ListGroupItem',
  props: {
    isActive: Boolean,
    link: String,
    name: String,
    count: Number
  }
}
</script>

<style scoped>

</style>
