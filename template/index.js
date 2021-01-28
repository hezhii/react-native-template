/*
 * @Author: biu
 * @Date: 2020-01-09 15:59:05
 * @LastEditTime: 2021-01-28 11:15:02
 * @Description: js 入口文件
 */
import { AppRegistry } from 'react-native'
import 'react-native-gesture-handler' // for react-navigation https://reactnavigation.org/docs/en/getting-started.html

import { name as appName } from './app.json'
import App from './src/App'

AppRegistry.registerComponent(appName, () => App)
