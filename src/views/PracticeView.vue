<template>
  <PracticeTable
      v-slot:default="practice"
      :practices="practices"
      @refresh="refresh"
      :allowed-operations="allowedOperations"
      :privileged="privileged">
    <ActivityTable
        :practice-id="practice.practiceId"
        :practice-ended="practice.practiceEnded"
        :allowed-operations="allowedOperations"
        :privileged="privileged"/>
  </PracticeTable>
</template>

<script>
import {defineComponent} from 'vue'
import PracticeTable from '@/components/PracticeTable'
import ActivityTable from '@/components/ActivityTable'
import {getMyPractice} from '@/services/practice'
import {isLoggedIn} from '@/services/user'
import {useRouter} from 'vue-router'

export default defineComponent({
  practiceName: 'PracticeView',
  components: {
    PracticeTable,
    ActivityTable
  },
  data() {
    return {
      practices: [],
      allowedOperations: {
        rename: true,
        join: false,
        leave: true,
        append: true,
        remove: true,
        end: true,
        score: false,
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
      this.practices = []
      getMyPractice().then(res => {
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
    // getMyPractice().then(res => {
    //   console.log(res.data)
    //   this.practices = res.data
    // })
  }
})
</script>

<style scoped>

</style>
