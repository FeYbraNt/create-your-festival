<template>
    <v-autocomplete v-model="band" :items="bands" :get-label="getLabel" :input-attrs="{ placeholder: 'Write here...' }"
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
            border: 2px solid rgba(251,170,52,0.8);
            text-transform: uppercase;
            outline: none; color: #deddd9; 
            background-color: transparent;
            margin-bottom: 0; padding-bottom: 0;
            &:hover { background-color: #000; }
        }
        &.v-autocomplete-selected {
            .v-autocomplete-input {
                border: 2px solid #bd7104;
            }
        }
    }
    .v-autocomplete-list {
        text-align: left;
        width: 100%;
        overflow-y: auto; z-index: 2;
        border-bottom: 1px solid #bd7104;
        .v-autocomplete-list-item {
            cursor: pointer; padding: 10px;
            background-color: #000 !important;
            border-bottom: 1px solid #bd7104;
            border-left: 1px solid #bd7104;
            border-right: 1px solid #bd7104;
            color: #deddd9;
            &:last-child {
                border-bottom: none;
            }
            &:hover {
                background-color: #a96603;
            }
        }
    }
}
</style>