<!-- src/components/World.vue -->
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Vue.js world!'
    }
  },
  mounted () {
    console.log('Hello component')
  }
}
</script>
