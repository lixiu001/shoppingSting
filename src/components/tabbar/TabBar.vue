<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  /* flex布局 */
  display: flex;
  /* text-align: center; */
  /* tabbar的高度一般都为49px */
  /* height: 49px; */
  background-color: #f6f6f6;
  /* 将tabbar定位在底部 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.01);
}
</style>
