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
    props: ['friends'],
    data(){
        return{

        }
    }
}

</script>

<style>
#onlinefriends{
    color: blue;
}

</style>