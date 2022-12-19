<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <!-- props erneut weiterleiten, Zugriff auf "post" durch iterate oben -->
            <SinglePost :post="post" />
        </div>
    </div>
</template>



<script>
import { onMounted, onUpdated, onUnmounted } from "vue";
import SinglePost from "./SinglePost.vue"
export default {

    //"posts" abholen
    props: ['posts'], 

    components: { SinglePost },

    //um props im setup zu nutzen, als Argument angeben
    setup(props) {
        //lifecycle-hooks im setup ebenfalls möglich, heißen dann statt mounted() -> onMounted() / updated() -> onUpdated() / etc.
        onMounted(() => console.log("component mounted"))
        onUpdated(() => console.log("component updated"))
        onUnmounted(() => console.log("component unmounted"))
    }

}
</script>

<style>
</style>