<template>
  <div>
    <span>{{ item.title }}</span>
  </div>  
</template>

<script>
export default {
  props: {
    item: { required: false },
    searchText: { required: false }
  }
}
</script>

<style lang="scss" scoped>
small { text-align: right; }
</style>
