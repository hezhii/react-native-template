import React from 'react'
import { StyleSheet, Image } from 'react-native'

const IMAGES = {
  Home: require('../../assets/icons/home.png'),
  My: require('../../assets/icons/my.png'),
}

const TabbarIcon = ({ routeName, tintColor }) => {
  return (
    <Image
      source={IMAGES[routeName]}
      style={[styles.image, { tintColor: tintColor }]}
      resizeMode="contain"
    />
  )
}

const styles = StyleSheet.create({
  image: {
    height: 24,
  },
})

export default TabbarIcon
