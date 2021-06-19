<template>
  <Navbar />
  <router-view/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Navbar from './components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: { Navbar }
})
</script>
<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>