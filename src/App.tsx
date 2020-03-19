import React from 'react'
import { StatusBar } from 'react-native'
import { useSelector } from 'react-redux'

import configNavigator from './navigator'
import useThemeContext from './hooks/useThemeContext'
import { RootState } from './types/model'

export default function App() {
  const loginStatus = useSelector<RootState>(state => state.login.status)
  const { theme } = useThemeContext()
  const Navigator = configNavigator(theme, loginStatus === 'success')

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Navigator />
    </>
  )
}
