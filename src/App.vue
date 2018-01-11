<template>
  <div id="app">
    <header>
      <img width="300" src="./assets/logo.png" align="left">
      <div class="header-text">
        <h1>Welcome to Your Dreamest Festival</h1>
        <h4>Write down the names of your preffered bands and create your own festival!</h4>
      </div>
    </header>
    <div>
      <BandField :categorie="categories[0]" />
      <BandField :categorie="categories[1]" />
      <BandField :categorie="categories[2]" />
    </div>
  </div>
</template>

<script>
import BandField from './components/BandField.vue'

export default {
  components: { BandField },
  data() {
    return {
      categories: ['Main artist', 'Second artist', 'Third artist']
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

header {
  min-height: 350px;
  padding: 50px;
  border-bottom: 1px solid;
  text-align: left;
  display: inline-block;
  .header-text, img {
    display: table-cell;
    padding: 1rem;
  }
}

</style>
