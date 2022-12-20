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
import getPosts from "@/composables/getPosts";

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {

    //getPosts Funktion aus Composables, const extrahiert den return aus getPost
    const { posts, error, load } = getPosts()
    
    //load() wurde aus getPosts() extrahiert und kann nun außerhalb genutzt werden
    load()

    //die extrahierten values müssen weiterhin returnt werden, um außerhalb vom setup() im Template genutzt zu werden
    return { posts, error }
  }
}
</script>
