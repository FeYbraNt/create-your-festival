<template>
    <div class="band-field">
        <h2>{{ categorie }}</h2>
        <SearchInput @item-selected="addBand" />
        <Band :key="band.id" :id="band.id" :thumb="image" :artist="band" />
    </div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import Band from './Band.vue'

const api = {
    url: 'https://api.discogs.com',
    callback: 'callbackname'
}

export default {
    props: {
        categorie: String
    },
    components: { SearchInput, Band },
    data() {
        return {
            band: { id: null },
            image: String
        }
    },
    methods: {
        addBand(item) {
            this.image = item.thumb;
            this.$jsonp(item.resource_url, { callback: api.callback }).then(response => {
                this.band = response.data;
                console.log(response.data);
            });
        }
    }  
}
</script>

<style lang="scss">
.band-field {
    width: 300px;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #2c3e50;
    display: inline-table;
    min-height: 350px;
}
</style>

