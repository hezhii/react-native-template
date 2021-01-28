import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'

import { version } from '../package.json'
import Navigator from './Navigator'
import store from './models'
import Portal from './components/Portal'
import { ThemeContextProvider } from './theme'
import { getToken } from './services/storage'
import { CHANGE_LOGIN_STATUS } from './types/model'
import { SUCC_CODE } from './services/api'

/**
 * 定义全局变量
 */
global.version = version
global.store = store

const App = () => {
  const [initializing, setInitializing] = useState(true)

  // 加载缓存
  useEffect(() => {
    const loadCache = () => {
      const tokenPromise = getToken()
        .then(token => {
          global.token = token
          // 如果 token 存在，则认为登录成功
          store.dispatch({
            type: CHANGE_LOGIN_STATUS,
            payload: SUCC_CODE,
          })
        })
        .catch(err => {
          console.log('加载缓存 token 失败: ' + err.message)
        })
      return Promise.all([tokenPromise])
    }

    loadCache().finally(() => setInitializing(false))
  }, [])

  if (initializing) {
    return null
  }

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Portal.Host>
          <Navigator />
        </Portal.Host>
      </ThemeContextProvider>
    </Provider>
  )
}

export default App
