<template>
    <section class="item-details flex align-center justify-center">
        <h3>My items</h3>
        
        <button @click="goTo()">Go back</button>
    </section>
</template>
  
<script>
export default {
    name: 'item-details',
    props: {
        _id: String,
    },
    created() {
        console.log(this._id)
    },
    methods: {
        goTo() {
            this.$router.back()
        },
    },
}
</script>
  
<style>

</style>
  