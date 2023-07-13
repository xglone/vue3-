<script setup>
import { ref, onMounted } from 'vue'
import { getbannerAPI } from '@/apis/home.js'
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
</script>



<template>
    <div class="home-banner">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item">
                <img :src="item.imgUrl" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>



<style scoped lang='scss'>
.home-banner {
    width: 1240px;
    height: 500px;
    // position: absolute;
    margin: 0 auto;
    left: 0;
    top: 0;
    z-index: 98;

    img {
        width: 100%;
        height: 500px;
    }
}
</style>