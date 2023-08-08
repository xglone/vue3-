import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user.js'


export const userUserStore = defineStore('user', () => {
    // 1.定义管理用户数据的state
    const userInfo = ref({})
    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
        // console.log(res)
    }
    // 3.return返回对象格式的state 和action
    return { userInfo, getUserInfo }
},
    {
        persist: true,
    })
