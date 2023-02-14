<template>

<div id="allfriends">
    <h2>Friends List</h2>
    <div v-for="friend in friends">Name: {{ friend.name}}, Status: {{ friend.status }}</div>
</div>


</template>

<script>

export default {
    name: 'Allfriends',
    data(){
        return{
            friends: [
                {name: 'A',status: 'online' },
                {name: 'B',status: 'online' },
                {name: 'C',status: 'offline' },
                {name: 'D',status: 'online' },
                {name: 'E',status: 'offline' },
            ]

        }
    }

}


</script>


<style scope>

   #allfriends{
    color: red;
}

</style>

