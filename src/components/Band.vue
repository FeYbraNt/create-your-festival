<template>
    <div v-if="id != null" class="band-item card">
        <h4>{{ artist.name }}</h4>
        <div class="card-image">
                <img :src="thumb" :alt="artist.name" class="float-center" />
        </div>
        <div class="card-section">
            <p slot="profile" v-html="artist.profile">{{ artist.profile }}</p>
            <p><strong>Alternative names: </strong>
                <ul>
                    <li :key="name" v-for="name in artist.namevariations">
                        {{ name }}
                    </li>
                </ul>
            </p>
        </div>
    </div> 
</template>

<script>
export default {
  props: {
    id: Number,
    thumb: String,
    artist: {}
  }
}
</script>

<style lang="scss" scoped>
.band-item { 
    background-color: transparent; border: 0;
    color: #FFF; position: relative; width: 100%;
    img { border: 1px solid #e6e6e6; }
}
li { display: block; }
</style>
