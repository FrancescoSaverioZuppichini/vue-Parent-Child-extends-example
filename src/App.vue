<template>
<div id="app">
  <img src="./assets/logo.png">
  <person :person="parent"></person>
</div>
</template>

<script>
import Store from './Store.js'
import Person from './components/Person.vue'

export default {
  name: 'app',
  data() {
    let parent = Store.getParent()
    return {
      parent: parent
    }
  },
  components: {
    Person
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
