import React, { useState, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { login } from '../../models/login'
import Toast from '../../components/Toast'
import { RootState } from '../../types/model'

const Login = () => {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const loading = useSelector<RootState>(({ loading }) => loading.login)
  const dispatch = useDispatch()

  const doLogin = useCallback(() => {
    if (!username || !password) {
      Toast.show('Please input username and password')
      return
    }
    dispatch(login({ username, password }))
  }, [dispatch, username, password])

  return (
    <View style={styles.container}>
      <Input
        placeholder="Username"
        style={styles.input}
        value={username}
        onChange={v => setUsername(v)}
      />
      <Input
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={v => setPassword(v)}
      />
      <Button onPress={doLogin} loading={loading}>
        Login
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
})

export default Login
