// 封装轮播业务代码
import { ref, onMounted } from 'vue'
import { getbannerAPI } from '@/apis/home.js'
export function useBanner() {

    // state导航列表数据
    const bannerList = ref([])
    // action获取导航数据的方法
    const getBanner = async () => {
        const res = await getbannerAPI({
            distributionSite: '2'
        })
        bannerList.value = res.result
        // console.log(res)
    }

    onMounted(() => {
        getBanner()
    })
    return {
        bannerList
    }
}