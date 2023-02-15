<template>

<div id="allfriends">
    <h2>Friends List</h2>
    <!-- <div v-for="friend in friends">Name: {{ friend.name}}, Status: {{ friend.status }}</div> -->
    <div v-for="(friend,index) in friends" :key="index" >
        <div @click="deleteFriend(friend.name)">
            Name: {{ friend.name}}, Status: {{ friend.status }}
        </div>
    </div>
</div>


</template>

<script>

export default {
    name: 'Allfriends',
    props: ['friends'],
    data(){
        return{

        }
    },
    methods: {
        deleteFriend(name){
            this.$emit('delete', {name})
        }
    }

}


</script>


<style scope>

   #allfriends{
    color: red;
}

</style>

