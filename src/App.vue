<template>
  <div id="app">
    <router-view />
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar.vue";
export default {
  name: "APP",
  components: {
    MainTabBar,
  },
};
</script>


<style>
/* 引入css文件方式： */
@import "./assets/css/base.css";
</style>>
