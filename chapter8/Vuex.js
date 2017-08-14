// src/main.js
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // Store가 가지고 있는 상태 값 입니다.
    // Vue 인스턴스의 data와 유사합니다.
    count: 0
  },
  mutations: {
    // Store가 가지고 있는 메서드 입니다.
    // Vue 인스턴스의 methods와 유사합니다.
    increment (state) {
      state.count += 1
    },
    decrement (state) {
      state.count -= 1
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store, // Vue 인스턴스에 Store 객체를 전달하면 모든 자식 컴포넌트에서 Store 객체에 접근이 가능합니다.
  el: '#app',
  template: '<App/>',
  components: { App }
})
