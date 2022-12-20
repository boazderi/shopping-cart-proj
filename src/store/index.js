import { createStore } from 'vuex'
import { itemService } from '../services/item.service'

export const store = createStore({
  state: {
    items: null,
    cart: null
  },
  getters: {
    getItems(state) {
      return state.items
    },
    getCart(state) {
      return state.cart
    },
 
  },
  mutations: {
    setFilter(state, { filter }) {
      state.filterBy = { ...filter }
    },
    setItems(state, { items }) {
      state.items = items
    },
    addToCart(state, { item }) {
      state.cart.push(item)
    },
    removeFromCart(state, { itemId }) {
      const idx = state.cart.findIndex(i => i.id === itemId)
      state.cart.splice(idx, 1)
    }
  },
  actions: {
    async loadItems({ commit }) {
      const items = await itemService.query()
      console.log('items:', items)
      commit({ type: 'setItems', items })
    },

  },
  modules: {

  },
})
