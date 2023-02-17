import axios from 'axios';



const instance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})



export const get = (url: string, params: Object = {}) => instance.request({
    method: 'GET',
    url: url,
    params: params
})


export const post = (url: string, params: Object = {}, data: Object) => instance.request({
    method: 'POST',
    url: url,
    params: params,
    data: data
})




export const put = (url: string, params: Object = {}, data: Object) => instance.request({
    method: 'PUT',
    url: url,
    params: params,
    data: data
})

export const destroy = (url: string, params: Object = {}) => instance.request({
  method: 'DELETE',
  url: url,
  params: params
})


