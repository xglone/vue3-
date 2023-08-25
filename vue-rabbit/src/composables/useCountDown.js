// 封装倒计时逻辑函数
import dayjs from 'dayjs'
import { ref, computed, onUnmounted } from 'vue'
export const useCountDown = () => {
    let timer = null
    // 声明响应式数据
    const time = ref(0)
    // 格式化时间为 xx分xx秒
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

    // 开启倒计时的函数
    const start = (currenTime) => {
        // 编写开始倒计时的逻辑
        // 核心逻辑的编写:每隔一秒减一
        time.value = currenTime
        timer = setInterval(() => {
            time.value--

        }, 1000)

    }
    // 组件销毁时清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }

}