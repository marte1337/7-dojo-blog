import { ref } from "vue"

//id wird als Argument benötigt, kommt aus dem Funktions-call in DetailsView
const getPost = (id) => {
    
    //post hier kein Array, da nur ein Post abgeholt wird
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        //endpoint bekommt jetzt die id
        let data = await fetch("http://localhost:3000/posts/" + id)
        console.log(data)
        if (!data.ok) {
          throw Error("this post does not exist")
        }
        post.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }
    return { post, error, load }
}

export default getPost
