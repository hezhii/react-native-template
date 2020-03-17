import React from 'react'
import { StyleSheet, Image } from 'react-native'

const IMAGES: any = {
  Home: require('../../assets/icons/home.png'),
  My: require('../../assets/icons/my.png'),
}

interface Props {
  focused: boolean
  tintColor?: string
  horizontal?: boolean
  routeName: string
}

const TabbarIcon = React.memo(({ routeName, tintColor }: Props) => {
  return (
    <Image
      source={IMAGES[routeName]}
      style={[styles.image, { tintColor: tintColor }]}
      resizeMode="contain"
    />
  )
})

const styles = StyleSheet.create({
  image: {
    height: 24,
  },
})

export default TabbarIcon
