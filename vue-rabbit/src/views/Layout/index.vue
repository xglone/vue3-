<script setup>
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCotegory())
</script>
<template>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!-- 添加key破坏复用机制，强制销毁重建 -->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <RouterView />
    <LayoutFooter />
</template>