// createRouter:创建router实例对象
// createWebHistory：创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应的关系位置
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'Category/:id',
          name: 'Category',
          component: () => import('@/views/Category/index.vue'),
        },
        {
          path: 'Category/sub/:id',
          name: 'SubCategory',
          component: () => import('@/views/SubCategory/index.vue'),
        },
        {
          path: 'Detail/:id',
          name: 'Detail',
          component: () => import('@/views/Detail/index.vue'),
        },
        {
          path: 'cartList',
          name: 'cartList',
          component: () => import('@/views/CartList/index.vue'),
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('@/views/checkout/index.vue'),
        },

      ]

    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    }
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
