<template>

  <div id="new">
    {{ title }}
  </div>
  <Navbar></Navbar>
  <!-- props is used when we pass same array in multiple components -->
  <Allfriends :friends="friends"></Allfriends>
  <Onlinefriends :friends="friends"></Onlinefriends>



</template>

<script>

import Navbar from './components/Navbar.vue'
import Allfriends from './components/Allfriends.vue'
import Onlinefriends from './components/Onlinefriends.vue'

export default {
  name: 'App',
  data(){
    return {
      title: 'New Application Running',
      friends: [
                {name: 'A',status: 'online' },
                {name: 'B',status: 'online' },
                {name: 'C',status: 'offline' },
                {name: 'D',status: 'online' },
                {name: 'E',status: 'offline' },
            ]
    }
  },
  components: {
  Navbar,
  Allfriends,
  Onlinefriends
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
