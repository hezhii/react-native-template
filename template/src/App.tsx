import React from 'react'
import { StatusBar } from 'react-native'
import { useSelector } from 'react-redux'

import configNavigator from './navigator'
import useThemeContext from './hooks/useThemeContext'
import { RootState } from './types/model'
import { SUCC_CODE } from './services/api'

export default function App() {
  const loginStatus = useSelector<RootState>(state => state.login.status)
  const { theme } = useThemeContext()
  const Navigator = configNavigator(theme, loginStatus === SUCC_CODE)

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Navigator />
    </>
  )
}
