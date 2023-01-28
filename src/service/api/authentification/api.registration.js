import * as axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8080/",
})

api.interceptors.request.use((request) => {
    request.headers['Accept'] = 'application/json'
    request.headers['Content-Type'] = 'application/json'
    request.headers['Access-Control-Allow-Origin'] = '*'
    if (sessionStorage.getItem('accessToken') != null && sessionStorage.getItem('accessToken') !== "undefined") {
        request.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('accessToken')
    }
    return request

})

export default api
