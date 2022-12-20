<template>
  <section class="item-details flex align-center justify-center">
    <h3 class="my-items-title">My items</h3>
    <div v-for="(item, idx) in items" :key="idx" class="flex item-row align-center">
      <div class="item-cart-title">{{ item.title }}</div>
      <div>Price: {{item.price + '€'}} </div>
      <div class="cart-img-container">
        <img :src="`src/assets/images/${item.title}.jpg`" width="30" alt="" />
      </div>
    </div>
    <button @click="goTo()">Go back</button>
  </section>
</template>
  
<script>
export default {
  name: "item-details",
  created() {
  },
  methods: {
    goTo() {
      this.$router.back();
    },
  },
  computed: {
    items() {
      return this.$store.getters.getCart;
    },

  },
};
</script>
