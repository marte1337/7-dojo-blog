<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">

      <!-- props erstellen :posts="posts" -->
      <PostList :posts="posts" />

    </div>
    <div v-else>Loading...</div>

  </div>
</template>



<script>
import PostList from "../components/PostList.vue";
import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {

    //posts wird in der "load"-Funktion befüllt: posts.value = await data.json()
    const posts = ref([ ])
    const error = ref(null)

    //Daten abholen mit async & await
    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts")
        console.log(data)
        if (!data.ok) {
          throw Error("no data available")
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }

    }

    load()

    return { posts, error }
  }
}
</script>
