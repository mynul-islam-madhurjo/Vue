<template>

  <div id="new">
    {{ title }}
  </div>
  <Navbar></Navbar>
  <Allfriends></Allfriends>
  <Onlinefriends></Onlinefriends>



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
