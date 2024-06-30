import request from '@/utils/request'

interface IResponse {
  code: string
  data: any
  msg: string
}
export const Api = {
  getUser(): Promise<IResponse> {
    return request('/api/user/-')
  }
}
