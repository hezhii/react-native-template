import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'

import Button from '../../components/Button'
import { logout } from '../../models/login'

const My = () => {
  const dispatch = useDispatch()
  const doLogout = useCallback(
    () => {
      dispatch(logout)
    },
    [dispatch],
  )

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={doLogout}
      >
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
