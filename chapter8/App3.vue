<template>
  <div id="app">
    카운트: {{ $store.state.count }} <!-- Store 객체의 count를 렌더링합니다. -->
    <counter />
    <counter />
    <counter />
  </div>
</template>

<script>
import Counter from './components/Counter'

export default {
  name: 'app',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
