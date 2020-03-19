import React from 'react'
import { Provider } from 'react-redux'

import { version } from '../package.json'
import App from './App'
import store from './models'
import { ThemeContextProvider } from './theme'

/**
 * 定义全局变量
 */
global.version = version

function setup() {
  // TODO: 全局的初始化操作，例如初始化 SDK

  const Root = () => (
    <Provider store={store}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  )

  return Root
}

export default setup
