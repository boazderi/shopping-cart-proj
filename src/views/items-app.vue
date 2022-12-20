<template>
  <section>
    <app-filter></app-filter>
    <h1>app</h1>
    <items-list :items="items" />
  </section>
  <RouterView />
</template>

<script>
import itemsList from '../components/items-list.vue'
import appFilter from './../components/app-filter.vue'

export default {
  name: 'items-app',
  components: {
    itemsList,
    appFilter,
  },
  created() {
    this.$store.dispatch({ type: 'loadItems' })
  },

  computed: {
    items() {
      const filterBy = this.$store.getters.getFilter
      let items = this.$store.getters.getItems
      console.log(filterBy)
      if (!filterBy) return items
      const regex = new RegExp(filterBy.txt, 'i')
      return items.filter((item) => regex.test(item.content))
    },
  },
}
</script>

<style></style>
