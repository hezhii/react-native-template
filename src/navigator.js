import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from './pages/Home'
import My from './pages/My'
import Second from './pages/Second'

const MainTab = createBottomTabNavigator({
  Home,
  My,
})

const AppStack = createStackNavigator({
  Main: {
    screen: MainTab,
    navigationOptions: {
      headerShown: false,
    },
  },
  Second,
})

export default function configNavigator() {
  return createAppContainer(AppStack)
}
