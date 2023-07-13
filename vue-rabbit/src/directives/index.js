// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const directivePlugin = {
    install(app) {
        // 使用app实现懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el:指令绑定的元素img
                // binding:binding.value 指令等于号后面绑定的表达式的值 图片url
                console.log(el, binding)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}

