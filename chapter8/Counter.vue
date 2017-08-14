<!-- src/components/Counter.vue -->
<template>
  <div>
    <button @click="increment">증가</button>
    <button @click="decrement">감소</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  methods: {
    increment () {
      this.$store.commit('increment') // Store 객체의 increment 메서드를 실행합니다.
    },
    decrement () {
      this.$store.commit('decrement') // Store 객체의 decrement 메서드를 실행합니다.
    }
  }
}
</script>

<style>
</style>
