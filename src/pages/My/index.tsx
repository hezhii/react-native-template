import React from 'react'
import { StyleSheet, View } from 'react-native'

import Button from '../../components/Button'

const My = () => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => console.log('logout')}
        disabled>
        Logout
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  button: {
    marginTop: 24,
  },
})

export default My
