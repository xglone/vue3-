// 引入初始化的样式文件
import '@/styles/common.scss'

// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 测试接口函数
// import { getCotegory } from '@/apis/testAPI'

// getCotegory().then(res => {
//     console.log(res)
// })
const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy', {
    mounted(el, binding) {
        // el:指令绑定的元素img
        // binding:binding.value 指令等于号后面绑定的表达式的值 图片url
        console.log(el, binding)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                console.log(isIntersecting)
                if (isIntersecting) {
                    // 进入视口区域
                    el.src = binding.value

                }
            },
        )
    }
})
