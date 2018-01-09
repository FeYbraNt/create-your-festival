import Vue from 'vue'
import App from './App.vue'
import VueJsonp from 'vue-jsonp'
import Autocomplete from 'v-autocomplete'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-autocomplete/dist/v-autocomplete.css'

Vue.use(VueJsonp);
Vue.use(Autocomplete);

new Vue({
  el: '#app',
  render: h => h(App)
})
