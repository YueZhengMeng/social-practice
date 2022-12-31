<template>
  <tr>
    <td data-bs-toggle="collapse" :data-bs-target="`#${bsTarget}`">
      {{ group.groupID }}
    </td>
    <RenameableLabel
      :name="group.groupName"
      @rename="rename"
      :data-bs-target="`#${bsTarget}`"
      :privileged="privileged"
      :enabled="allowedOperations?.rename"
    />
    <td data-bs-toggle="collapse" :data-bs-target="`#${bsTarget}`">
      {{ group.practiceID }}
    </td>
    <RenameableLabel
        v-if="allowedOperations?.showScore"
        placeholder="请打分..."
        @rename="scoreHandler"
        :data-bs-target="`#${bsTarget}`"
        :enabled="allowedOperations?.allowScore && privileged"
        :name="group.score" />
    <td>
      <div class="btn-group" role="group">
        <button v-if="group.isInside" class="btn btn-danger" type="button"
                @click="leaveHandler">
          退出
        </button>
        <button v-else-if="!practiceEnded" class="btn btn-success" type="button"
                @click="joinHandler">
          加入
        </button>
      </div>
    </td>
  </tr>
  <Collapse :bs-target="bsTarget">
    <slot></slot>
<!--    <UserTable :group-id="group.groupID" />-->
  </Collapse>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import RenameableLabel from '@/components/RenameableLabel.vue'
import {joinGroup, leaveGroup, renameGroup, scoreGroup} from '@/services/group'
import Collapse from '@/components/Collapse.vue'
// import UserTable from '@/components/UserTable.vue'

export default defineComponent({
  name: 'GroupTableRow',
  components: {
    // UserTable,
    Collapse,
    RenameableLabel
  },
  props: {
    group: {
      type: Object,
      required: true,
    },
    privileged: {
      type: Boolean,
      required: true
    },
    allowedOperations: {
      type: Object,
      required: true
    },
    practiceEnded: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    rename(newName: string) {
      // console.log(newName)
      renameGroup(this.group.groupID, newName)
        .then(() => {
          this.$emit('refresh', newName)
        }).catch(err => {
            console.log('renameGroup', err)
        })
    },
    scoreHandler(score: string) {
      scoreGroup(this.group.groupID, parseInt(score))
          .then(() => {
            this.$emit('refresh', score)
          }).catch(err => {
            console.log('renameGroup', err)
          })
    },
    leaveHandler() {
      leaveGroup(this.group.groupID)
        .then(() => {
          alert('退出成功')
          this.$emit('refresh')
        }).catch(err => {
            console.log('leaveGroup', err)
        })
    },
    joinHandler() {
      joinGroup(this.group.groupID)
        .then(() => {
          alert('加入成功')
          this.$emit('refresh')
        }).catch(err => {
            console.log('joinGroup', err)
        })
    }
  },
  computed: {
    bsTarget() {
      return `group${this.group.groupID}`
    },
  }
})
</script>

<style scoped>

</style>
