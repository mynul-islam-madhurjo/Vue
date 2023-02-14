<template>

  <div id="new">
    {{ title }}
  </div>
  <Navbar></Navbar>
  <nav>
            <ul>
                <li><a href="" >Home</a></li>
                <li><a href="" >Blog</a></li>
                <li><a href="" >About us</a></li>
                <li><a href="" >Contact</a></li>
            </ul>
        </nav>

</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  data(){
    return {
      title: 'New Application Running',
    }
  },
  components: {
  Navbar
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
