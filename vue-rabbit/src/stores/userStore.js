import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user.js'
import { userCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const userUserStore = defineStore('user', () => {
    const cartStore = userCartStore()
    // 1.定义管理用户数据的state
    const userInfo = ref({})
    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
        // 合并购物车的操作
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count,

            }
        }))
        cartStore.updatedNewList()
        // console.log(res)
    }
    // 退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        //执行清楚购物车的action
        cartStore.clearCart()
    }
    // 3.return返回对象格式的state 和action
    return { userInfo, getUserInfo, clearUserInfo }
},
    {
        persist: true,
    })
