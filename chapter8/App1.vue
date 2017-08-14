<!-- src/App.vue -->
<template>
  <div id="app">
    <button @click="fetchPosts">불러오기</button>
    <div v-for="post in posts">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    fetchPosts () {
      this.axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.posts = response.data
        })
    }
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
