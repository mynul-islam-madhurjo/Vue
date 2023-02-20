<template>

<div id="app">

    <div>
        <ul>
            <li v-for="(value, index) in filter" :key="index">
                {{ value }}
            </li>
        </ul>

    </div>

    <!-- <div>{{ posts }}</div> -->

    <input type="text" v-model="searchterm">

    <h2>Title</h2>
    <div v-for="post in filterSearch">
    {{post.title}}
    </div>


    <h2>Body</h2>
    <div v-for="(value, index) in updatedFilter" :key="index">
        <hr>
    {{ value }}
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
            array1: [1,2,3,4,5],
            searchterm: ""
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

    filter() {
        return this.array1.map(x => {
           return x=x+1
        })
  },
    updatedFilter() {
        return this.posts.map(x => {
            if(!x.body || typeof(x.body) != 'string') return ''
            x.body = x.body.slice(0, 50)
            return x.body
        })
    },

    filterSearch(){
        return this.posts.filter(x => {
            return x.title.match(this.searchterm)
        })
    }



    // filterSearch(){
    //     return this.searchterm
    //     ? this.posts.filter((post) => post.title.indexOf(this.searchterm))
    //     : this.posts;

    //     console.log(this.posts)
    // }


}
}


</script>


<style>


</style>