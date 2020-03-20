import Toast from '../components/Toast'
import { logout } from '../models/login'
import { SUCC_CODE } from '../services/api'

interface Options {
  method?: string
  body?: any
  headers?: any
  timeout?: number
  dataType?: string
  uncheckRes?: boolean
}

interface HttpError extends Error {
  code?: number
  response?: Response
}

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const errortext = response.statusText || String(response.status)
  const error: HttpError = new Error(errortext)
  error.code = response.status
  error.response = response
  throw error
}

function parseJSON(response: Response) {
  return response.json()
}

function parseText(response: Response) {
  return response.text()
}

function parseReponse(dataType: string | undefined) {
  if (dataType === 'text') {
    return parseText
  } else {
    return parseJSON
  }
}

// 检查后台返回的结果
function checkResponse(res: any) {
  if (res.code === SUCC_CODE) {
    return res
  }
  const error: HttpError = new Error(res.msg)
  error.code = res.code
  error.response = res
  throw error
}

export default (url: string, options?: Options): Promise<any> => {
  const defaultOptions = {
    dataType: 'json',
    uncheckRes: false,
    headers: {
      Authorization: global.token,
    },
  }
  const newOptions: Options = { ...defaultOptions, ...options }
  const method = (newOptions.method && newOptions.method.toUpperCase()) || 'GET'

  if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      }
      newOptions.body = JSON.stringify(newOptions.body)
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      }
    }
  }
  if (__DEV__) {
    console.log(`Request ${url} with options:\b`, newOptions)
  }
  return Promise.race([
    fetch(url, newOptions),
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        const err: HttpError = new Error('Timeout')
        err.code = -1
        reject(err)
      }, newOptions.timeout || 20000)
    }),
  ])
    .then(checkStatus)
    .then(parseReponse(newOptions && newOptions.dataType))
    .then(res => {
      if (__DEV__) {
        console.log(`${url} response :`, res)
      }
      /**
       * 根据参数决定是否统一检查返回结果
       */
      if (newOptions.uncheckRes) {
        return res
      }
      return checkResponse(res)
    })
    .catch(err => {
      if (__DEV__) {
        console.warn(`Request ${url} error:`, err)
      }
      if (err.code === 401) {
        // token 失效或异常，重新登录
        global.store.dispatch(logout)
      } else {
        Toast.fail('FAIL', err.message)
      }
      return err.response
    })
}
