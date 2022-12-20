import { createRouter, createWebHashHistory } from 'vue-router'
import itemsApp from './../views/items-app.vue'
import itemDetails from './../views/item-details.vue'
import itemCart from './../views/item-cart.vue'
const router = createRouter({
    history: createWebHashHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'app',
            component: itemsApp,
            children: [{
                path: '/:_id',
                name: 'details',
                props: true,
                component: itemDetails,
            }, ],
        },
        {
            path: '/cart',
            name: 'cart',
            component: itemCart,

        }
    ],
})

export default router