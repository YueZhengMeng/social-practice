<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>社会实践活动编号</th>
        <th>社会实践活动名称</th>
        <th>开始时间</th>
        <th>结束时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <PracticeTableRow
        v-for="practice in practices"
        :practice="practice"
        :key="practice.practiceID"
        @delete="refresh"
        @rename="refresh"
        :allowed-operations="allowedOperations"
        :privileged="privileged">
        <slot :practice-id="practice.practiceID" :practice-ended="practice.state === 1"></slot>
<!--        <ActivityTable :practice-id="practice.practiceID" :practice-ended="practice.state === 1"/>-->
      </PracticeTableRow>
      <AppendRow v-if="allowedOperations.append && privileged" @append="addPracticeHandler" placeholder="请输入新的活动名称..."/>
    </tbody>
  </table>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount} from 'vue'
import PracticeTableRow from '@/components/PracticeTableRow.vue'
import {createPractice, getMyPractice} from '@/services/practice'
import {isLoggedIn} from '@/services/user'
import {useRouter} from 'vue-router'
import AppendRow from '@/components/AppendRow.vue'

export default defineComponent({
  name: 'PracticeTable',
  components: {
    AppendRow,
    PracticeTableRow,
  },
  props: {
    practices: {
      type: Array,
      required: true,
    },
    privileged: {
      type: Boolean,
      required: true
    },
    allowedOperations: {
      type: Object,
      required: true,
    },
  },
  // data() {
  //   return {
  //     practices: [],
  //   }
  // },
  // computed: {
  //   practiceEnded(id: number) {
  //     return this.practices[id].state === 1
  //   }
  // },
  methods: {
    refresh() {
      this.$emit('refresh')
    },
    // refresh() {
    //   this.practices = []
    //   getMyPractice().then(res => {
    //     console.log(res.data)
    //     this.practices = res.data
    //   })
    // },
    addPracticeHandler(e: string) {
      console.log(e)
      createPractice(e)
        .then(res => {
          console.log(res.data)
          // if (res.data === 1) {
          //   getMyPractice().then(res => {
          //     console.log(res.data)
          //     this.practices = res.data
          //   })
          // }
          this.refresh()
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  // mounted() {
  //   getMyPractice().then(res => {
  //     console.log(res.data)
  //     this.practices = res.data
  //   })
  // },
  // setup() {
  //   onBeforeMount(() => {
  //     if (!isLoggedIn())
  //       useRouter().push('/login')
  //   })
  // }
})
</script>

<style scoped>

</style>
