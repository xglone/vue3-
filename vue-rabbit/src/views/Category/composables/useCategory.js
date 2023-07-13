// 封装分类业务代码
import { getTopCategoryAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
export function useCategory() {
    // 获取分类数据
    const categoryDate = ref({})
    const route = useRoute()
    const getCatgeory = async (id = route.params.id) => {
        const res = await getTopCategoryAPI(id)
        categoryDate.value = res.result
    }
    onMounted(() => {
        getCatgeory()
    })
    // 目标：路由参数变化的时候，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        // console.log('路由变化了')
        // 存在问题，使用最新的路由参数请求最新的分类数据
        getCatgeory(to.params.id)

    })
    return {
        categoryDate
    }
}