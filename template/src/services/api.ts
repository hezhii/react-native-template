import { LoginData } from '../types/model'
import request from '../utils/request'

interface Response {
  [properties: string]: any
}

export const SUCC_CODE = 'success'

export const login = (data: LoginData): Promise<Response> => {
  // return request('/login', {
  //   method: 'POST',
  //   body: data,
  // })
  return new Promise(resolve => {
    setTimeout(() => resolve({ code: SUCC_CODE, data: 'TOKEN-XXX' }), 1000)
  })
}
