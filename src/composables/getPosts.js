import { ref } from 'vue'


const getPosts = () => {
    
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
    return { posts, error, load }
}

export default getPosts