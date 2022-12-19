<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>



<script>

export default {
  name: 'HomeView',
  setup() {
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum', id: 1 },
      { title: 'top 5 CSS tips', body: 'Lorem ipsum', id: 2 }
    ])



    return { posts }
  }
}
</script>
