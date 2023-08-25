import request from '@/utils/http'

// 结算页的接口
// 获取最新的购物车列表接口
export const getcheckInfoAPI = () => {
    return request({
        url: '/member/order/pre',
    })
}

// 创建订单
export const createOrderAPI = (data) => {
    return request({
        url: '/member/order',
        method: 'POST',
        data
    })
}
