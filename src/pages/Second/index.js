import React from 'react'
import { StyleSheet, Text, ImageBackground } from 'react-native'
import { useHeaderHeight } from 'react-navigation-stack'

const Second = () => {
  const headerHeight = useHeaderHeight()
  return (
    <ImageBackground
      style={[styles.container, { paddingTop: headerHeight }]}
      source={require('../../assets/img/bg.jpg')}>
      <Text style={styles.text}>I have a full screen background image</Text>
    </ImageBackground>
  )
}

Second.navigationOptions = {
  headerTransparent: true,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginTop: 64,
    fontSize: 20,
    fontWeight: '500',
  },
})

export default Second
