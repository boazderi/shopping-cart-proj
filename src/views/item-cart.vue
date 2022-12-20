<template>
    <section class="item-details flex align-center justify-center">
        <h3>My items</h3>
        <div
        v-for="(item, idx) in items" :key="idx"
        >
            <div class="item-cart-title"> {{item.title}} </div>
            <div class="cart-img-container"> <img :src="item.imgPath" width="40" alt=""> </div>
        </div>
            <pre> {{items}} </pre>
        <button @click="goTo()">Go back</button>
    </section>
</template>
  
<script>
export default {
    name: 'item-details',
    data() {
        return {
            item: 0
        }
    },
    created() {
        // console.log(this._id)
    },
    methods: {
        goTo() {
            this.$router.back()
        },
    },
    computed:{
        items(){
            console.log(this.$store.getters.getItems);
            return this.$store.getters.getItems
        }
    },
}
</script>
