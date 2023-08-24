// 封装购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { userUserStore } from './userStore.js'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart.js'



export const userCartStore = defineStore('cart', () => {
    const userStore = userUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 1.定义state- cartlist
    const cartList = ref([])
    // 2.定义action-addCart
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            // 登录之后的加入购物车逻辑
            await insertCartAPI({ skuId, count })
            updatedNewList()
        } else {
            // 添加购物车操作
            // 已添加过 - count+1
            // 没有添加过 - 直接push
            // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                // 找到了
                item.count++
            } else {
                cartList.value.push(goods)
            }
        }

    }
    // 3.定义删除函数删除购物车
    const delCart = async (skuId) => {
        if (isLogin.value) {
            await delCartAPI([skuId])
            updatedNewList()

        } else {
            // 思路：1.找到要删除项目的下标值-splice
            // 2.使用数组的过滤方法-filter
            const idx = cartList.value.findIndex((item) => skuId === item)
            cartList.value.splice(idx, 1)
        }

    }

    // 获取最新购物车列表
    const updatedNewList = async () => {
        const res = await findNewCartListAPI()
        cartList.value = res.result
    }


    // 计算属性
    // 1.总的数量 所有项目的count之和
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    // 2.总价 所有项目的count*price之和
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    // 定义一个单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected

    }
    // 定义一个全选功能
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }

    // 定义一个清除购物车
    const clearCart = () => {
        cartList.value = []
    }

    // 3.已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 4.已选择商品价钱合计
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

    // 是否可选
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    return {
        cartList,
        allCount,
        allPrice,
        selectedCount,
        selectedPrice,
        isAll,
        addCart,
        delCart,
        singleCheck,
        allCheck,
        clearCart
    }
}, {
    persist: true,
})