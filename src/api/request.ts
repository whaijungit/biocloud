import axios from 'axios'
import { notification } from 'antd'
import { tokenKey } from '@/config'

const request = axios.create({
    timeout: 5000,
    baseURL: '/api',
})

request.interceptors.request.use((request) => {
    if (localStorage.getItem(tokenKey)) {
        request.headers.set('Authorization', 'Bearer ' + localStorage.getItem(tokenKey))
    }
    return request
})

request.interceptors.response.use(
    (response) => {
        if (response) {
            return response.data
        }
        return Promise.resolve(response)
    },
    (reason) => {
        if (reason.response) {
            if (reason.response.data.code === 401) {
                localStorage.removeItem(tokenKey)
            }
            else if (reason.response.data.code === 404) {
            }
            else if (reason.response.data.code === 500) {
            }
            else {
                notification.error({
                    type: 'error',
                    duration: 1,
                    message: reason.response.data.msg
                })
            }
            return Promise.resolve(reason.response.data)
        }
        return Promise.resolve(reason)
    }
)

export default request
