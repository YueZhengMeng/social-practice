<template>
  <PracticeTable
      v-slot:default="practice"
      @refresh="refresh"
      :practices="practices"
      :allowed-operations="allowedOperations"
      :privileged="privileged">
    <GroupTable
        @refresh="refresh"
        :practice-id="practice.practiceId"
        :practice-ended="practice.practiceEnded"
        :allowed-operations="allowedOperations"
        :privileged="privileged"/>
  </PracticeTable>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PracticeTable from '@/components/PracticeTable.vue'
import GroupTable from '@/components/GroupTable.vue'
import {getAllPractice} from '@/services/practice'
import {isLoggedIn} from '@/services/user'
import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'DiscoveryView',
  components: {GroupTable, PracticeTable},
  data() {
    return {
      practices: [],
      allowedOperations: {
        rename: false,
        join: true,
        leave: true,
        append: false,
        remove: false,
        end: false,
        showScore: false,
        allowScore: false,
      },
    }
  },
  computed: {
    privileged() {
      return this.$store.getters['user/privileged']
      // return this.$store.state.user.role === 'teacher' || this.$store.state.user.role === 'admin'
    }
  },
  methods: {
    refresh() {
      this.practices = []
      getAllPractice().then(res => {
        console.log(res.data)
        this.practices = res.data
      })
    },
  },
  setup() {
    if (!isLoggedIn())
      useRouter().push('/login')
  },
  mounted() {
    this.refresh()
  }
})
</script>

<style scoped>

</style>
