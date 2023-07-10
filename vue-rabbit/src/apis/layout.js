import httpInstance from '@/utils/http'

export function getCotegoryAPI() {
    return httpInstance({
        url: 'home/category/head'
    })
}
