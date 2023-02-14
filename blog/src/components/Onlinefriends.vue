<template>
<div id="onlinefriends">
    <h3>Showing Only Online Friends</h3>
    <div v-for="friend in friends">
    <div v-if="friend.status=='online'">{{ friend.name }}</div>
    </div>
</div>

</template>

<script>
export default {
    name: 'Onlinefriends',
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

<style>
#onlinefriends{
    color: blue;
}

</style>