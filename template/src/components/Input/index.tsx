import React, { ReactNode } from 'react'
import { StyleSheet, View, ViewStyle, TextInput } from 'react-native'

import useThemeContext from '../../hooks/useThemeContext'

interface Props {
  style?: ViewStyle,
  inputStyle?: ViewStyle,
  value?: string,
  onChange?: (v: string) => void,
  prefix?: ReactNode,
  suffix?: ReactNode,
  bordered?: boolean,
  placeholder?: string
}

const index = (props: Props) => {
  const {
    prefix,
    suffix,
    bordered = true,
    style,
    inputStyle,
    onChange,
    ...resetProps
  } = props

  const { theme } = useThemeContext()

  const borderStyle = {
    borderBottomWidth: 1,
    borderColor: theme.colors.border_color_base
  }


  return (
    <View style={[styles.input, bordered && borderStyle, style]}>
      {prefix && <View style={styles.prefix}>{prefix}</View>}
      <TextInput
        underlineColorAndroid="transparent"
        style={[styles.textInput, { color: theme.colors.text_color }, inputStyle]}
        placeholderTextColor={theme.colors.text_color_secondary}
        onChangeText={onChange}
        {...resetProps}
      />
      {suffix}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    height: 36,
    padding: 0
  },
  prefix: {
    marginRight: 12
  }
})


export default index
