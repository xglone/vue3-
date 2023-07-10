import httpInstance from '@/utils/http'

export function getbannerAPI() {
    return httpInstance({
        url: 'home/banner'
    })
}
