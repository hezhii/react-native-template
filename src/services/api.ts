import { LoginData } from 'src/types/model'

interface Response {
  [properties: string]: any
}

export const login = (data: LoginData): Promise<Response> => {
  return Promise.resolve({ code: 'success' })
}
