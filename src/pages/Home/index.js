import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import useThemeContext from '../../hooks/useThemeContext'
import useStatusBar from '../../hooks/useStatusBar'
import { addTheme } from '../../theme'
import Button from '../../components/Button'

const Home = props => {
  const { navigation } = props
  const { theme, themeName, changeTheme } = useThemeContext()
  const brandPrimary = theme.colors.brand_primary

  useStatusBar(navigation, 'light-content')
  const onSwitchTheme = () => {
    if (themeName === 'default') {
      addTheme('red', {
        colors: {
          brand_primary: '#f5222d',
        },
      })
      changeTheme('red')
    } else {
      changeTheme('default')
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push('Second')}>
        <View>
          <Text style={[styles.text, { color: brandPrimary }]}>
            Second page
          </Text>
        </View>
      </TouchableOpacity>
      <Button onPress={onSwitchTheme}>Switch Theme</Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  text: {
    marginTop: 16,
    marginBottom: 24,
    fontSize: 18,
  },
})
