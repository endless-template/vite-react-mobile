import { Toast } from 'antd-mobile'
import { FetchError, ofetch } from 'ofetch'

const request = ofetch.create({
  baseURL: '',
  timeout: 20000,
  headers: {
    // Accept: 'application/json'
    // 'aaaa': '99999'
  },
  credentials: 'include',
  onRequest: ({ options }) => {
    // 兼容android 6.X 版本, v1.2.0版本后method不能为空且需要大写
    options.method = options.method ? options.method.toUpperCase() : 'GET'
  },
  onResponse: ({ response }) => {
    if (response.status === 200) {
      return response._data
    } else {
      const errorText = '接口请求出错'
      Toast.show(errorText)
    }
  }
})
export default request
