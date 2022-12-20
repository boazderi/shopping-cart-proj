<template>
  <section class="item-details flex align-center justify-center">
    <h3 class="my-items">My items</h3>
    <div v-for="(item, idx) in items2" :key="idx" class="flex">
      <div class="item-cart-title">{{ item.title }}</div>
      <div class="cart-img-container">
        <img :src="item.imgPath" width="40" alt="" />
      </div>
    </div>
    <pre> {{ items }} </pre>
    <button @click="goTo()">Go back</button>
  </section>
</template>
  
<script>
export default {
  name: "item-details",
  data() {
    return {
      items2: [
        {
          id: "i101",
          title: "item1",
          price: "101",
          imgPath: "src/assets/images/food1.jpg",
        },
        {
          id: "i102",
          title: "item2",
          price: "102",
          imgPath: "src/assets/images/food2.jpg",
        },
        {
          id: "i103",
          title: "item3",
          price: "103",
          imgPath: "src/assets/images/food3.jpg",
        },
        {
          id: "i104",
          title: "item4",
          price: "104",
          imgPath: "src/assets/images/food4.jpg",
        },
        {
          id: "i105",
          title: "item5",
          price: "105",
          imgPath: "src/assets/images/food5.jpg",
        },
        {
          id: "i106",
          title: "item6",
          price: "106",
          imgPath: "src/assets/images/food7.jpg",
        },
      ],
    };
  },
  created() {
    // console.log(this._id)
      console.log(this.$store.getters.getItems);
  },
  methods: {
    goTo() {
      this.$router.back();
    },
  },
  computed: {
    // items() {
    //   return this.$store.getters.getItems;
    // },
  },
};
</script>
