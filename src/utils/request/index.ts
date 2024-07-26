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
  onRequest: () => {},
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
