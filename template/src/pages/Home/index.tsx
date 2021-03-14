import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import useThemeContext from '../../hooks/useThemeContext'
import Button from '../../components/Button'
import useStatusBar from '../../hooks/useStatusBar'
import { getCurrentLocation } from '../../components/RNAmapGeolocation'

const Home = (props: any) => {
  const { navigation } = props
  const { themeName, theme, changeTheme } = useThemeContext()
  useStatusBar('light-content')

  useEffect(() => {
    getCurrentLocation().then((location: any) => {
      if (__DEV__) {
        console.log('UserLocation', location)
      }
    })
  }, [])

  const onSwitchTheme = () => {
    if (themeName === 'default') {
      changeTheme('dark')
    } else {
      changeTheme('default')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.colors.heading_color }]}>
        Happy Chinese New Year!
      </Text>
      <Button onPress={() => navigation.push('FullScreenBg')} style={{ marginVertical: 24 }}>
        Full screen background
      </Button>
      <Button onPress={onSwitchTheme}>
        {themeName === 'default' ? 'Dark mode' : 'Light mode'}
      </Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: '500',
  },
})
