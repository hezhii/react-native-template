import React from 'react'
import { StatusBar } from 'react-native'

import configNavigator from './navigator'
import useThemeContext from './hooks/useThemeContext'

export default function App() {
  const { theme } = useThemeContext()
  const Navigator = configNavigator(theme)

  return (
    <>
      <StatusBar translucent backgroundColor={theme.colors.brand_primary} />
      <Navigator />
    </>
  )
}
