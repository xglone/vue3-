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
          component: () => import('@/views/Category/index.vue')
        }
      ]

    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
