<script setup>
// 以24小时的热榜获取数据模板
// 1.封装模板
// 2.调用接口
import { getHotGoodsAPI } from '@/apis/detail.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// defineProps({
//     titles: {
//         type: String,
//         default: '', //默认值

//     },
//     hotType: {
//         type: Number,
//         default: 1, //默认值

//     }
// })
const hotList = ref({})
const route = useRoute()

const getHotList = async () => {

    const res = await getHotGoodsAPI({ id: route.params.id, tyep: 1, limit: 3 })
    hotList.value = res.result
    console.log(res)
}
onMounted(() => getHotList())
</script>


<template>
    <div class="goods-hot">
        <h3>24小时热榜</h3>
        <!-- 商品区块 -->
        <RouterLink to="/" class="goods-item" v-for="item in hotList" :key="item.id">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
    </div>
</template>


<style scoped lang="scss">
.goods-hot {
    h3 {
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>