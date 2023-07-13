<script setup>
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'

// 触发获取banner轮播的action
import { usebannerStore } from '@/stores/banner.js'
import { onMounted } from 'vue'
const bannerStore = usebannerStore()
onMounted(() => bannerStore.getBanner())
</script>
<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
</template>
<style scoped lang="scss">
.container {}
</style>