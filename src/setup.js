import { version } from '../package.json'
import App from './App'

/**
 * 定义全局变量
 */
global.version = version

function setup() {
  // TODO: 全局的初始化操作，例如初始化 SDK

  return App
}

export default setup
