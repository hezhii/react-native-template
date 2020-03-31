/*
 * @Author: biu
 * @Date: 2020-01-13 16:50:30
 * @LastEditTime: 2020-03-31 17:47:29
 * @Description: 设置状态栏样式
 */
import { useCallback } from 'react'
import { StatusBar, StatusBarStyle } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

const useStatusBar = (barStyle: StatusBarStyle) => {
  // 使用 useFocusEffect，否则页面切换时状态栏切换有延时
  // @see:https://reactnavigation.org/docs/status-bar
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(barStyle)
    }, []),
  )
}

export default useStatusBar
