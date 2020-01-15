import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native'

import useThemeContext from '../../hooks/useThemeContext'

export default ({ children, onPress, style, disabled, loading }) => {
  const { theme } = useThemeContext()
  const unable = disabled || loading

  const handlePress = () => {
    if (!unable) {
      onPress && onPress()
    }
  }

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={unable ? 1 : 0.8}>
      <View
        style={[
          styles.button,
          { backgroundColor: theme.colors.brand_primary },
          unable && { opacity: 0.8 },
          style,
        ]}>
        {loading && <ActivityIndicator style={styles.loading} />}
        <Text style={[styles.buttonText, { color: theme.colors.btn_text }]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    marginRight: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
})
