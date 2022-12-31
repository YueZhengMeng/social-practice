<template>
  <GroupTable
      @refresh="refresh"
      :groups="groups"
      :allowed-operations="allowedOperations"
      :privileged="privileged"/>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount} from 'vue'
import GroupTable from '@/components/GroupTable.vue'
import {getAllGroup, getMyGroup} from '@/services/group'
import {isLoggedIn} from '@/services/user'
import {useRouter} from 'vue-router'

export default defineComponent({
  practiceName: 'GroupView',
  components: {GroupTable},
  data() {
    return {
      groups: [],
      allowedOperations: {
        rename: true,
        join: true,
        leave: true,
        append: false,
        remove: false,
        end: false,
        showScore: true,
        allowScore: true,
      },
    }
  },
  computed: {
    privileged() {
      return this.$store.getters['user/privileged']
    }
  },
  methods: {
    refresh() {

      getMyGroup().then(res => {
        this.groups = res.data
      })
    }
  },
  setup() {
    onBeforeMount(() => {
      if (!isLoggedIn())
        useRouter().push('/login')
    })
  },
  mounted() {
    this.refresh()
    // getAllGroup()
    //     .then(res => {
    //       console.log(res.data)
    //       this.$data.groups = res.data
    //     })
  }
})
</script>

<style scoped>

</style>
