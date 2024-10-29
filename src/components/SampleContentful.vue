<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-if="post">{{ post.fields.title }}</li>
      <li v-else>Loading...</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import client from '../contentfulConfig'

export default {
  name: 'BlogPosts',
  setup() {
    const post = ref(null)

    client
      .getEntry('2ds5IgN1r6RGQPmE3m6U9A')
      .then(entry => {
        post.value = entry
        console.log('post.value', post.value)
      })
      .catch(console.error)

    return { post }
  },
}
</script>

<style scoped>
/* Bạn có thể thêm các kiểu CSS tùy chỉnh ở đây */
</style>
