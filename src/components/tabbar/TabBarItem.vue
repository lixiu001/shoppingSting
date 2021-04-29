<template>
  <div class="tab-bar-item" @click="clickItem">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    // 让使用TabBarItem的组件传入需要导航跳转的路由
    path: String,
    // TabBarItem被点击的时候显示的颜色
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // TabBarItem被点击的时候显示的颜色
      // isActive: false,
    };
  },
  methods: {
    clickItem() {
      // $router为VueRouter实例，想要导航到不同URL，则使用$router.push(可以返回上一个路由)、$router.replce（不可以返回上一个路由）方法
      // $route为当前router跳转对象里面可以获取name、path、query、params等
      this.$router.push(this.path);
    },
  },
  computed: {
    // 当前TabBarItem是否处于活跃状态
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // TabBarItem处于活跃状态时显示红色
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>


<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 除去图片底部多余空白 */
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: red;
}
</style>