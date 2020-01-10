import { createAppContainer } from 'react-navigation'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { HEADER_HEIGHT, STATUS_BAR_HEIGHT } from './utils/device'
import HeaderBackImage from './components/HeaderBackImage'

import Home from './pages/Home'
import My from './pages/My'
import Second from './pages/Second'

const defaultStackOptions = {
  headerBackTitle: '返回',
  headerStyle: {
    height: STATUS_BAR_HEIGHT + HEADER_HEIGHT,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerBackTitleStyle: {
    fontSize: 15,
  },
  headerBackImage: HeaderBackImage,
  headerTitleAlign: 'center',
  headerPressColorAndroid: 'transparent', // 安卓点击返回按钮时的反馈颜色
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 切换时水平切换
}

const MainTab = createBottomTabNavigator({
  Home,
  My,
})

const AppStack = createStackNavigator(
  {
    Main: {
      screen: MainTab,
      navigationOptions: {
        headerShown: false,
      },
    },
    Second,
  },
  {
    defaultNavigationOptions: defaultStackOptions,
  },
)

export default function configNavigator() {
  return createAppContainer(AppStack)
}
