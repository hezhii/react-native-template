import { AppRegistry } from 'react-native'
import 'react-native-gesture-handler' // for react-navigation https://reactnavigation.org/docs/en/getting-started.html

import { name as appName } from './app.json'
import setup from './src/setup'

AppRegistry.registerComponent(appName, setup)
