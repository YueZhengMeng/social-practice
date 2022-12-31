<template>
  <div class="list-group">
    <ListGroupItem
        name="欢迎"
        link="/"
        :is-active="$route.path === '/'"
    />
<!--    <ListGroupItem-->
<!--        name="登录"-->
<!--        link="/login"-->
<!--        :is-active="$route.path === '/login'"-->
<!--    />-->
    <ListGroupItem
        name="我的社会实践活动"
        link="/practice"
        :is-active="$route.path === '/practice'"
    />
    <ListGroupItem
        name="我的小组"
        link="/group"
        :is-active="$route.path === '/group'"
    />
    <ListGroupItem
        name="发现广场"
        link="/discovery"
        :is-active="$route.path === '/discovery'"
    />
<!--    <ListGroupItem-->
<!--        name="进度管理"-->
<!--        link="/progress"-->
<!--        :is-active="$route.path === '/progress'"-->
<!--    />-->
<!--    <a href="#" class="list-group-item active">-->
<!--      欢迎页-->
<!--    </a>-->
<!--    <div class="list-group-item">-->
<!--      登录-->
<!--    </div>-->
    <!--            <div class="list-group-item">-->
    <!--              <h4 class="list-group-item-heading">-->
    <!--                List group item heading-->
    <!--              </h4>-->
    <!--              <p class="list-group-item-text">-->
    <!--                ...-->
    <!--              </p>-->
    <!--            </div>-->
<!--    <div class="list-group-item justify-content-between">-->
<!--      Help <span class="badge badge-secondary badge-pill">14</span>-->
<!--    </div>-->
<!--    <a href="#" class="list-group-item list-group-item-action active justify-content-between">-->
<!--      Home-->
<!--      <span class="badge badge-light badge-pill">14</span>-->
<!--    </a>-->
  </div>
</template>

<script>
import ListGroupItem from '@/components/ListGroupItem'
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'ListGroup',
  components: {ListGroupItem},
  computed: {

  }
})
</script>

<style scoped>

</style>
