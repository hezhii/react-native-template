import React from 'react'

import { version } from '../package.json'
import App from './App'
import { ThemeContextProvider } from './theme'

/**
 * 定义全局变量
 */
global.version = version

function setup() {
  // TODO: 全局的初始化操作，例如初始化 SDK

  const Root = () => (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  )

  return Root
}

export default setup
