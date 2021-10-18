import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { RootState } from './types/model'
import useThemeContext from './hooks/useThemeContext'
import HeaderBackImage from './components/HeaderBackImage'
import TabbarIcon from './components/TabbarIcon'
import { SUCC_CODE } from './services/api'

// 页面组件
import Home from './pages/Home'
import FullScreenBg from './pages/FullScreenBg'
import My from './pages/My'
import Login from './pages/Auth/Login'

// 主界面 tab 页
const MAIN_TABS = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'My',
    component: My,
  },
]
const MainTab = createBottomTabNavigator()
function MainTabScreen() {
  const { theme } = useThemeContext()
  const { colors } = theme

  const tabOptions = ({ route }: any) => {
    return {
      tabBarIcon: (props: any) => <TabbarIcon {...props} routeName={route.name} />,
    }
  }

  const tabBarOptions = {
    inactiveTintColor: colors.text_color_secondary,
    activeTintColor: colors.brand_primary,
    style: {
      borderTopWidth: 0,
      backgroundColor: colors.tabbar_bg,
    },
  }

  return (
    <MainTab.Navigator screenOptions={tabOptions} tabBarOptions={tabBarOptions}>
      {MAIN_TABS.map(tab => (
        <MainTab.Screen {...tab} key={tab.name} />
      ))}
    </MainTab.Navigator>
  )
}

const APP_STACKS = [
  {
    name: 'MainTab',
    component: MainTabScreen,
  },
  {
    name: 'FullScreenBg',
    component: FullScreenBg,
    options: {
      headerTransparent: true,
    },
  },
]
const AUTH_STACK = [
  {
    name: 'Login',
    component: Login,
  },
]
const AppStack = createStackNavigator()

export default function Navigator() {
  const loginStatus = useSelector<RootState>(state => state.login.status)
  const insets = useSafeAreaInsets()
  const { theme } = useThemeContext()
  const { colors } = theme

  const stackOptions: any = {
    headerBackTitle: 'Back',
    headerStyle: {
      // height: insets.top + HEADER_HEIGHT,
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
    cardStyle: {
      // TODO: Stack 嵌套 Tab 的情况下，tab 的背景色无法正常修改
      backgroundColor: colors.page_bg,
    },
  }

  const stacks = loginStatus === SUCC_CODE ? APP_STACKS : AUTH_STACK

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="float" screenOptions={stackOptions}>
        {stacks.map(tab => (
          <AppStack.Screen {...tab} key={tab.name} />
        ))}
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
