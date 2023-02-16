<template>

<div id="app">
    <!-- <div v-for="post in posts" :key="post.id">
        <hr>
    <h3>#{{post.id}} {{post.title}}</h3>
    <p>post.body</p>
    </div> -->

    <div>
        <ul>
            <li v-for="(value, index) in filtered" :key="index">
                {{ value }}
            </li>
        </ul>

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
            posts: [],
            array1: [1,2,3,4,5]
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
    },
    computed: {

    filtered() {
        return this.array1.map(x => {
           return x=x+1
        });

  }

}
}


</script>


<style>


</style>