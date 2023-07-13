<script setup>
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
defineProps({
    categoryDate: {
        type: Object,
        default: () => {

        }
    }

})
</script>
<template>
    <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
            <li v-for="i in categoryDate.children" :key="i.id">
                <RouterLink to="/">
                    <img :src="i.picture" />
                    <p>{{ i.name }}</p>
                </RouterLink>
            </li>
        </ul>
    </div>
    <div class="ref-goods" v-for="item in categoryDate.children" :key="item.id">
        <div class="head">
            <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
            <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
}

.sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
        display: flex;
        padding: 0 32px;
        flex-wrap: wrap;

        li {
            width: 168px;
            height: 160px;


            a {
                text-align: center;
                display: block;
                font-size: 16px;

                img {
                    width: 100px;
                    height: 100px;
                }

                p {
                    line-height: 40px;
                }

                &:hover {
                    color: $xtxColor;
                }
            }
        }
    }
}

.ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
        .xtx-more {
            position: absolute;
            top: 20px;
            right: 20px;
        }

        .tag {
            text-align: center;
            color: #999;
            font-size: 20px;
            position: relative;
            top: -20px;
        }
    }

    .body {
        display: flex;
        justify-content: space-around;
        padding: 0 40px 30px;
    }
}
</style>