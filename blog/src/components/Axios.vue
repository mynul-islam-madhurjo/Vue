<template>

<div id="app">
    <div v-for="post in posts" :key="post.id">
    <h3>{{post.title}}</h3>
    <p>{{ post.body }}</p>
    </div>



</div>

</template>


<script>
import { VueElement } from 'vue'
import axios from 'axios'

export default {
    name: "Axios",
    data(){
        return{
            posts: []
        }
    },
    methods:{

    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            //console.log(response.data)
            this.posts = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }

}


</script>


<style>


</style>