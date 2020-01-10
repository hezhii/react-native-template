/**
 * 页面顶部返回按钮图标
 */
import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { IS_IOS } from '../../utils/device'

export default props => {
  return (
    <View style={styles.imgContainer}>
      <Image
        source={require('../../assets/icons/icon_back.png')}
        style={[styles.image, { tintColor: props.tintColor }]}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imgContainer: {
    paddingRight: IS_IOS ? 6 : 15,
    paddingLeft: IS_IOS ? 15 : 0,
  },
  image: {
    backgroundColor: 'transparent',
    height: 16,
    width: 10,
    resizeMode: 'contain',
  },
})
