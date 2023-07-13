<script setup>
import { getTopCategoryAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import categoryBanner from '@/views/Category/components/categoryBanner.vue'
import allCategory from '@/views/Category/components/allCategory.vue'

// 获取数据
const categoryDate = ref({})
const route = useRoute()
const getCatgeory = async () => {
    const res = await getTopCategoryAPI(route.params.id)
    categoryDate.value = res.result
}
onMounted(() => {
    getCatgeory()
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