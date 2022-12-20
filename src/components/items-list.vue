<template>
  <section class="item-list">
    <item-preview v-for="item in pagedItems" :key="item._id" :item="item" />
  </section>
  <button @click="prevPage" :disabled="page === 1">Prev</button>
  <button @click="nextPage" :disabled="page === numPages">Next</button>
</template>

<script>
import itemPreview from './item-preview.vue'

export default {
  name: 'item-list',
  props: {
    items: Array,
    // page: {
    //   type: Number,
    //   default: 1,
    // },
    // pageSize: {
    //   type: Number,
    //   default: 10,
    // },
  },
  data(){
    return{
      page:1,
      pageSize:2,
    }
  },
  components: {
    itemPreview,
  },
  computed: {
    numPages() {
      return Math.ceil(this.items.length / this.pageSize)
    },
    pagedItems() {
      const start = (this.page - 1) * this.pageSize
      return this.items.slice(start, start + this.pageSize)
    },
  },
  methods: {
    prevPage() {
      if (this.page > 1) {
        this.page--
      }
    },
    nextPage() {
      if (this.page < this.numPages) {
        this.page++
      }
    },
  },
}
</script>
