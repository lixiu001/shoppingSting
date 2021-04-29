import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件：调用vuex的install方法,判断Vuex是否已经注册过了，注册过了就直接返回，这里使用的是单例模式
//    - 判断vue是否已经注册过vuex插件；
//    - 将`vuexInit`函数混入到vue的beforeCreate生命周期中;
//    - 实例化vue时，会在vue每个实例上添加$store属性，并将vuex的实例绑定到$store属性上。
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
