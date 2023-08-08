// 引入初始化的样式文件
import '@/styles/common.scss'


// 引入全局组件插件
import { componentPlugin } from '@/components/index'
// 定义懒加载插件
import { directivePlugin } from '@/directives/index.js'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()


// 测试接口函数
// import { getCotegory } from '@/apis/testAPI'

// getCotegory().then(res => {
//     console.log(res)
// })
const app = createApp(App)


app.use(createPinia())
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(componentPlugin)
app.use(directivePlugin)
app.mount('#app')



