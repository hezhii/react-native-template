import React from 'react'

import configNavigator from './navigator'

export default function App() {
  const Navigator = configNavigator()

  return <Navigator />
}
