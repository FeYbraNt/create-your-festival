<template>
  <div id="app">
    <header>
      <h2>Welcome to Your Dreamest Festival</h2>
      <p>Write down the names of your preffered bands and create your own festival!</p>
    </header>
    <div class="band-list">
      <BandField v-for="category in categories" :key="category">
        <h2 v-bind:style="{ color: category.color }">{{ category.name }}</h2>
      </BandField>
    </div>
  </div>
</template>

<script>
import BandField from './components/BandField.vue'

export default {
  components: { BandField },
  data() {
    return {
      categories: [ 
        { name: 'Main artist', color: '#fbac39' }, 
        { name: 'Second artist', color: '#fff' }, 
        { name: 'Third artist', color: '#fff' } 
      ]
    }
  }
}
</script>

<style lang="scss">
body {
  background: url(./assets/bg.jpg) top center;
}

#app {
  font-family: 'MuseoSansCond-900','Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
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
  color: #fbac39;
}

header {
  width: 100%;
  background: #17181b url(./assets/logo.png) no-repeat top right;
  border-bottom: 1px solid #AAA;
  display: block;
  p { position: relative; color: #fbac39; }
}

.band-list {
  display: block;
}
</style>
