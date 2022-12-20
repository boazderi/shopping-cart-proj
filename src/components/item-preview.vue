<template>
  <section class="item-preview">
    <img :src="item.url" />
    <h3>{{ item.title }}</h3>
    <p>Price: {{ item.price }}</p>
  </section>
</template>

<script>
export default {
  name: 'item-preview',
  props: {
    item: Object,
  },
}
</script>

<style>

</style>
