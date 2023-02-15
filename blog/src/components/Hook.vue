<template>

    <div id="app">
        <h2>{{ title }}</h2>

        <button @click="changeTitle">Click</button>
    </div>


</template>



<script>
import { VueElement } from 'vue'




export default {
    name: "Hook",
    data(){
        return{
            title:'This is the hook title'
        }
    },
    methods:{
        changeTitle(){
            this.title = 'This is the new hook title'
        }
        
    },
    beforeCreate(){

    },
    created(){

    },
    beforeUpdate(){
        alert("BeforeUpdate Hook created")
    }
}

</script>

<style>



</style>