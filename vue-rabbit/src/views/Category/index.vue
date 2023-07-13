<script setup>
import { getTopCategoryAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import categoryBanner from '@/views/Category/components/categoryBanner.vue'
import allCategory from '@/views/Category/components/allCategory.vue'

// 获取数据

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
</script>

<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryDate.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <!-- 轮播图 -->
            <categoryBanner />
            <!-- 全部分类 -->
            <allCategory :categoryDate="categoryDate" />
        </div>
    </div>
</template>


<style scoped lang="scss">
.top-category {
    .bread-container {
        padding: 25px 0;
    }
}
</style>