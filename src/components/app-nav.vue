<template>
  <nav :class="['app-nav', isOpen && 'open']">
    <button class="icon close" v-icon="'times'" @click="$emit('toggle-open')"></button>

    <RouterLink v-for="(link, idx) in links" :key="idx" :to="links[idx].to" @click="$emit('toggle-open')">{{ link.title
    }} {{ link.itemsInCart }}</RouterLink>
    <span>{{cartItems.length}}</span>
  </nav>
</template>

<script>
export default {
  name: 'app-nav',
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      cartItems: this.$store.getters.getCart,
      links: [
        {
          to: '/',
          title: 'Home',
        },
        {
          to: '/cart',
          title: 'Cart',
        },
      ],
    }
  },
}
</script>

<style>

</style>
