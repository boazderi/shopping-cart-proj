<template>
  <section class="item-preview">
    <img :src="imgSrc" />
    <h3>{{ item.title }}</h3>
    <p>Price: {{ item.price }}</p>
    <button @click="">ADD TO CART</button>
  </section>
</template>

<script>
export default {
  name: 'item-preview',
  props: {
    item: Object,
  },
  computed: {
    imgSrc() {
      return `src/assets/images/${this.item.title}.jpg`
    }
  }
}
</script>