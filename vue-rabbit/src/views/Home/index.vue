<script setup>
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeProents from '@/views/Home/components/HomeProents.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
</script>
<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProents />
</template>
<style scoped lang="scss">
.container {}
</style>