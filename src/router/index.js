import { createRouter, createWebHashHistory } from 'vue-router'
import appHome from './../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import itemsApp from './../views/items-app.vue'
import appMap from './../views/app-map.vue'
import dashboard from '../views/dashboard.vue'
import itemDetails from './../views/item-details.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: appHome,
    },
    {
      path: '/item',
      name: 'app',
      component: itemsApp,
      children: [
        {
          path: '/item/:_id',
          name: 'details',
          props: true,
          component: itemDetails,
        },
      ],
    },

    {
      path: '/about',
      name: 'about',
      component: aboutView,
    },
    {
      path: '/map',
      name: 'map',
      component: appMap,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
  ],
})

export default router
