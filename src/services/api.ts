import { LoginData } from '../types/model'

interface Response {
  [properties: string]: any
}

export const login = (data: LoginData): Promise<Response> => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ code: 'success' }), 1000)
  })
}
