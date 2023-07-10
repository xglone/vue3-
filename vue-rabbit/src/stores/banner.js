import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getbannerAPI } from '@/apis/home.js'

export const usebannerStore = defineStore('banner', () => {
    // 导航数据管理
    // state导航列表数据
    const bannerList = ref([])
    // action获取导航数据的方法
    const getBanner = async () => {
        const res = await getbannerAPI()
        bannerList.value = res.result
        console.log(res)
    }

    return { bannerList, getBanner }
})
