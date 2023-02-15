<template>

<div id="allfriends">
    <h2>Friends List</h2>
    <!-- <div v-for="friend in friends">Name: {{ friend.name}}, Status: {{ friend.status }}</div> -->
    <div v-for="(friend,index) in friends" :key="index">Name: {{ friend.name}}, Status: {{ friend.status }}</div>
</div>


</template>

<script>

export default {
    name: 'Allfriends',
    props: ['friends'],
    data(){
        return{

        }
    }

}


</script>


<style scope>

   #allfriends{
    color: red;
}

</style>

