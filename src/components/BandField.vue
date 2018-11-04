<template>
    <div class="band-field">
        <slot></slot>
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
        category: String
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
    background-color: rgba(0, 0, 0, 0.6);
    width: 300px;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 5px;
    display: inline-block;
    min-height: 150px;
}
</style>

