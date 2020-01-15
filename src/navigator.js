import React from 'react'
import { createAppContainer } from 'react-navigation'
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { HEADER_HEIGHT, STATUS_BAR_HEIGHT } from './utils/device'
import HeaderBackImage from './components/HeaderBackImage'
import TabbarIcon from './components/TabbarIcon'

import Home from './pages/Home'
import My from './pages/My'
import FullScreenBg from './pages/FullScreenBg'

export default function configNavigator({ colors }) {
  const defaultStackOptions = {
    headerBackTitle: 'Back',
    headerStyle: {
      height: STATUS_BAR_HEIGHT + HEADER_HEIGHT,
      borderBottomWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: colors.header_bg,
    },
    headerTintColor: colors.header_tint_color,
    headerTitleStyle: {
      color: colors.header_text_color,
    },
    headerBackTitleStyle: {
      fontSize: 15,
      color: colors.header_text_color,
    },
    headerBackImage: HeaderBackImage,
    headerTitleAlign: 'center',
    headerPressColorAndroid: 'transparent', // 安卓点击返回按钮时的反馈颜色
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 切换时水平切换
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    cardStyle: {
      backgroundColor: colors.page_bg,
    },
  }

  const MainTab = createBottomTabNavigator(
    {
      Home,
      My,
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state
        return {
          tabBarIcon: props => <TabbarIcon {...props} routeName={routeName} />,
        }
      },
      tabBarOptions: {
        inactiveTintColor: colors.text_color_secondary,
        activeTintColor: colors.brand_primary,
        style: {
          borderTopWidth: 0,
          backgroundColor: colors.tabbar_bg,
        },
      },
    },
  )

  const AppStack = createStackNavigator(
    {
      Main: {
        screen: MainTab,
        navigationOptions: ({ navigation }) => {
          const { routeName } = navigation.state.routes[navigation.state.index]
          // You can do whatever you like here to pick the title based on the route name
          const headerTitle = routeName

          return {
            headerTitle,
          }
        },
      },
      FullScreenBg,
    },
    {
      defaultNavigationOptions: defaultStackOptions,
      headerMode: 'float',
    },
  )

  return createAppContainer(AppStack)
}
