<template>
    <v-autocomplete v-model="band" :items="bands" :get-label="getLabel" 
    :component-item="template" @update-items="fetchBands" @item-selected="addBand">
    </v-autocomplete>
</template>

<script>
import BandSearched from './BandSearched.vue'

// const apiKey = '1a5c39c6-350e-4001-9467-a3210b6f4616';
// const apiURL = 'http://em.wemakesites.net/search/band_name/';
const api = {
    url: 'https://api.discogs.com/database/search',
    type: 'artist',
    key: 'KatHwAuJgfbyvJAUViyK',
    secret: 'QJFJyEOfSHvBvOralMoUayMUkxjxoAVg',
    callback: 'callbackname',
    per_page: 5
}

export default {
  data() {
      return {
        band: { },
        bands: [],
        template: BandSearched
      }
  },
  methods: {
    getLabel(band) {
        return band.title;
    },
    fetchBands(text) {
        this.$jsonp(api.url, { q: text, type: api.type, per_page: api.per_page, key: api.key, secret: api.secret, callback: api.callback }).then(response => {
            this.bands = response.data.results;
        });
    },
    addBand(item) {
        this.$emit('item-selected', item);
    }
  }
}
</script>

<style lang="scss">
.v-autocomplete {
    margin: 0 auto;
    .v-autocomplete-input-group {
        .v-autocomplete-input {
            box-shadow: none;
            border: 1px solid #157977;
            outline: none;
            background-color: #eee;
        }
        &.v-autocomplete-selected {
            .v-autocomplete-input {
                color: green;
                background-color: #f2fff2;
            }
        }
    }
    .v-autocomplete-list {
        text-align: left;
        width: 100%;
        border: none;
        border-top: none;
        overflow-y: auto;
        border-bottom: 1px solid #157977;
        .v-autocomplete-list-item {
            cursor: pointer;
            padding: 10px;
            background-color: #fff;
            border-bottom: 1px solid #157977;
            border-left: 1px solid #157977;
            border-right: 1px solid #157977;
            &:last-child {
                border-bottom: none;
            }
            &:hover {
                background-color: #eee;
            }
        }
    }
}
</style>