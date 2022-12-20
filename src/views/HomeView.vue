<template>
  <section class="app-home">
    <h1>home component</h1>
    <p>Open your console!</p>
    <!-- <img :src="new URL(item.imgUrl, import.meta.url).href" alt=""> -->
    <h2>{{ getMsg }}</h2>
  </section>
</template>

<script>
export default {
  name: 'app-home',
  computed: {
    getMsg() {
      return this.$store.getters.getMsg
    },
  },
}
</script>
