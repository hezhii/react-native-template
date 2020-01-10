import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import userThemeContext from '../../hooks/userThemeContext'
import { addTheme } from '../../theme'

const Home = props => {
  const { navigation } = props
  const { theme, themeName, changeTheme } = userThemeContext()
  const brandPrimary = theme.colors.brand_primary

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
      <TouchableOpacity onPress={onSwitchTheme}>
        <View style={[styles.button, { backgroundColor: brandPrimary }]}>
          <Text style={styles.buttonText}>Switch Theme</Text>
        </View>
      </TouchableOpacity>
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
    marginVertical: 24,
    fontSize: 18,
  },
  button: {
    height: 44,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
})
